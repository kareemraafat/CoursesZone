// courses.js
function displayCourses() {
    fetch('/data/courses.json')
        .then(response => response.json())
        .then(data => {
            const coursesGrid = document.getElementById('courses-grid');
            if (!coursesGrid) return;
            coursesGrid.innerHTML = '';

            const isArabic = document.body.classList.contains('rtl') || 
                            document.documentElement.dir === 'rtl';

            data.courses.forEach(course => {
                const title = isArabic ? course.title_ar : course.title_en;
                const description = isArabic ? course.description_ar : course.description_en;
                const level = isArabic ? course.level_ar : course.level_en;
                
                const courseCard = document.createElement('div');
                courseCard.className = 'course-card';
                if (course.id === 2) courseCard.classList.add('featured');
                
                courseCard.innerHTML = `
                    <div class="image-wrapper">
                        <img class="course-image" src="${course.image}" alt="${title}">
                        <span class="course-level">${level}</span>
                    </div>
                    <div class="course-content">
                        <h3 class="course-title">${title}</h3>
                        <p class="course-description">${description}</p>
                        <div class="course-meta">
                            <span class="meta-item"><i class="fas fa-clock"></i> ${course.weeks} Weeks</span>
                            <span class="meta-item"><i class="fas fa-video"></i> ${course.weeks * 2} Lectures</span>
                        </div>
                        <div class="course-price">$${course.price} <small>/ All included</small></div>
                        <a href="#" class="course-btn">Enroll Now <i class="fas fa-arrow-right"></i></a>
                    </div>
                `;
                
                coursesGrid.appendChild(courseCard);
            });
        })
        .catch(error => console.error('Error loading courses:', error));
}

displayCourses();