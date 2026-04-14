// courses.js - Fetch from Admin Panel API
async function displayCourses() {
    try {
        const response = await fetch('https://courses-admin.kareemraafat2017.workers.dev/api/courses');
        const courses = await response.json();
        
        const coursesGrid = document.querySelector('.courses-grid');
        if (!coursesGrid) return;
        
        coursesGrid.innerHTML = '';
        
        const isArabic = document.body.classList.contains('rtl') || 
                        document.documentElement.dir === 'rtl';
        
        if (courses.length === 0) {
            coursesGrid.innerHTML = '<p>No courses yet. Add some from the admin panel.</p>';
            return;
        }
        
        courses.forEach(course => {
            const title = isArabic ? (course.title_ar || course.title_en) : (course.title_en || 'Course');
            const description = isArabic ? (course.description_ar || course.description_en || 'Professional course') : (course.description_en || 'Professional course');
            const level = isArabic ? (course.level_ar || 'مبتدئ') : (course.level_en || 'Beginner');
            const weeks = course.weeks || 20;
            const lectures = weeks * 2;
            const price = course.price || 0;
            const imageUrl = course.image || `https://placehold.co/600x400/8E11B2/white?text=${encodeURIComponent(title)}`;
            
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            
            courseCard.innerHTML = `
                <div class="image-wrapper">
                    <img class="course-image" src="${imageUrl}" alt="${title}">
                    <span class="course-level">${level}</span>
                </div>
                <div class="course-content">
                    <h3 class="course-title">${title}</h3>
                    <p class="course-description">${description}</p>
                    <div class="course-meta">
                        <span class="meta-item"><i class="fas fa-clock"></i> ${weeks} Weeks</span>
                        <span class="meta-item"><i class="fas fa-video"></i> ${lectures} Lectures</span>
                    </div>
                    <div class="course-price">$${price} <small>/ All included</small></div>
                    <a href="#" class="course-btn">Enroll Now <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            coursesGrid.appendChild(courseCard);
        });
    } catch (error) {
        console.error('Error loading courses:', error);
    }
}

// Run the function
displayCourses();
