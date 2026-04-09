// instructors.js
function displayInstructors() {
    fetch('/data/instructors.json')
        .then(response => response.json())
        .then(data => {
            const instructorsGrid = document.getElementById('instructors-grid');
       
            
            if (!instructorsGrid) {
                console.error('instructors-grid element not found!');
                return;
            }
            
            instructorsGrid.innerHTML = '';
            
            const isArabic = document.body.classList.contains('rtl') || 
                            document.documentElement.dir === 'rtl';

            data.instructors.forEach(instructor => {
                const name = isArabic ? instructor.name_ar : instructor.name_en;
                const title = isArabic ? instructor.title_ar : instructor.title_en;
                const bio = isArabic ? instructor.bio_ar : instructor.bio_en;
                
                const card = document.createElement('div');
                card.className = 'instructor-card';
                
                card.innerHTML = `
                    <img class="instructor-image" src="${instructor.image}" alt="${name}">
                    <h3 class="instructor-name">${name}</h3>
                    <div class="instructor-title">${title}</div>
                    <p class="instructor-bio">${bio}</p>
                    <div class="social-links">
                        <a href="${instructor.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="${instructor.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="${instructor.tiktok}" target="_blank"><i class="fab fa-tiktok"></i></a>
                    </div>
                `;
                
                instructorsGrid.appendChild(card);
            });
            
            
        })
        .catch(error => console.error('Error loading instructors:', error));
}

displayInstructors();
