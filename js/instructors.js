// instructors.js
function displayInstructors() {
    fetch('/data/instructors.json')
        .then(response => response.json())
        .then(data => {
            const instructorsGrid = document.getElementById('instructors-grid');
            if (!instructorsGrid) return;
            instructorsGrid.innerHTML = '';

            const isArabic = document.body.classList.contains('rtl') || 
                            document.documentElement.dir === 'rtl';

            data.instructors.forEach(instructor => {
                const name = isArabic ? instructor.name_ar : instructor.name_en;
                const title = isArabic ? instructor.title_ar : instructor.title_en;
                const bio = isArabic ? instructor.bio_ar : instructor.bio_en;
                
                const instructorCard = document.createElement('div');
                instructorCard.className = 'instructor-card';
                
                instructorCard.innerHTML = `
                    <img class="instructor-image" src="${instructor.image}" alt="${name}">
                    <h3 class="instructor-name">${name}</h3>
                    <div class="instructor-title">${title}</div>
                    <p class="instructor-bio">${bio}</p>
                    <div class="social-links">
                        ${instructor.facebook ? `<a href="${instructor.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>` : ''}
                        ${instructor.instagram ? `<a href="${instructor.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>` : ''}
                        ${instructor.tiktok ? `<a href="${instructor.tiktok}" target="_blank"><i class="fab fa-tiktok"></i></a>` : ''}
                    </div>
                `;
                
                instructorsGrid.appendChild(instructorCard);
            });
        })
        .catch(error => console.error('Error loading instructors:', error));
}

displayInstructors();