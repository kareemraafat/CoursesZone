// branches.js - Fetch from Admin Panel API
async function displayBranches() {
    try {
        const response = await fetch('https://courses-admin.kareemraafat2017.workers.dev/api/branches');
        const branches = await response.json();
        
        const branchesGrid = document.querySelector('.branches-grid');
        if (!branchesGrid) return;
        
        branchesGrid.innerHTML = '';
        
        const isArabic = document.body.classList.contains('rtl') || 
                        document.documentElement.dir === 'rtl';
        
        if (branches.length === 0) {
            branchesGrid.innerHTML = '<p>No branches yet. Add some from the admin panel.</p>';
            return;
        }
        
        branches.forEach(branch => {
            const name = isArabic ? (branch.name_ar || branch.name_en) : (branch.name_en || 'Branch');
            const address = isArabic ? (branch.address_ar || branch.address_en) : (branch.address_en || 'Address');
            const phone = branch.phone || '';
            const whatsapp = branch.whatsapp || '';
            
            const branchCard = document.createElement('div');
            branchCard.className = 'branch-card';
            
            branchCard.innerHTML = `
                <div class="branch-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="branch-name">${name}</div>
                <div class="branch-address">${address}</div>
                <div class="row-buttons">
                    <a href="tel:${phone}" class="btn-phone"><i class="fas fa-phone-alt"></i> ${isArabic ? 'اتصل' : 'Call'}</a>
                    <a href="https://wa.me/${whatsapp}" target="_blank" class="btn-wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                </div>
                <button class="btn-form open-modal"><i class="fas fa-envelope"></i> ${isArabic ? 'نموذج التواصل' : 'Contact Form'}</button>
            `;
            
            branchesGrid.appendChild(branchCard);
        });
    } catch (error) {
        console.error('Error loading branches:', error);
    }
}

displayBranches();
