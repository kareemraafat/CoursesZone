// branches.js
function displayBranches() {
    fetch('/data/branches.json')
        .then(response => response.json())
        .then(data => {
            const branchesGrid = document.querySelector('.branches-grid');
            if (!branchesGrid) return;
            branchesGrid.innerHTML = '';

            const isArabic = document.body.classList.contains('rtl') || 
                            document.documentElement.dir === 'rtl';

            data.branches.forEach(branch => {
                const name = isArabic ? branch.name_ar : branch.name_en;
                const address = isArabic ? branch.address_ar : branch.address_en;
                
                const branchCard = document.createElement('div');
                branchCard.className = 'branch-card';
                
                branchCard.innerHTML = `
                    <div class="branch-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="branch-name">${name}</div>
                    <div class="branch-address">${address}</div>
                    <div class="row-buttons">
                        <a href="tel:${branch.phone}" class="btn-phone"><i class="fas fa-phone-alt"></i> ${isArabic ? 'اتصل' : 'Call'}</a>
                        <a href="https://wa.me/${branch.whatsapp}" target="_blank" class="btn-wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                    <button class="btn-form open-modal"><i class="fas fa-envelope"></i> ${isArabic ? 'نموذج التواصل' : 'Contact Form'}</button>
                `;
                
                branchesGrid.appendChild(branchCard);
            });
        })
        .catch(error => console.error('Error loading branches:', error));
}

displayBranches();
