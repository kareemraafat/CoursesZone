// instructors.js - Fetch from Admin Panel API
async function displayInstructors() {
    try {
        const response = await fetch('https://courses-admin.kareemraafat2017.workers.dev/api/instructors');
        const instructors = await response.json();
        
        const instructorsGrid = document.querySelector('.instructors-grid');
        if (!instructorsGrid) return;
        
        instructorsGrid.innerHTML = '';
        
        const isArabic = document.body.classList.contains('rtl') || 
                        document.documentElement.dir === 'rtl';
        
        if (instructors.length === 0) {
            instructorsGrid.innerHTML = '<p>No instructors yet. Add some from the admin panel.</p>';
            return;
        }
        
        instructors.forEach(instructor => {
            const name = isArabic ? (instructor.name_ar || instructor.name_en) : (instructor.name_en || 'Instructor');
            const title = isArabic ? (instructor.title_ar || instructor.title_en) : (instructor.title_en || 'Title');
            const bio = isArabic ? (instructor.bio_ar || instructor.bio_en || 'Experienced instructor') : (instructor.bio_en || 'Experienced instructor');
            const imageUrl = instructor.image || `https://placehold.co/400x400/8E11B2/white?text=${encodeURIComponent(name)}`;
            
            const instructorCard = document.createElement('div');
            instructorCard.className = 'instructor-card';
            
            instructorCard.innerHTML = `
                <img class="instructor-image" src="${imageUrl}" alt="${name}">
                <h3 class="instructor-name">${name}</h3>
                <div class="instructor-title">${title}</div>
                <p class="instructor-bio">${bio}</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                </div>
            `;
            
            instructorsGrid.appendChild(instructorCard);
        });
    } catch (error) {
        console.error('Error loading instructors:', error);
    }
}

displayInstructors();
