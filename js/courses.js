// courses.js - Fetch courses from Admin Panel API (KV Database)
async function displayCourses() {
    try {
        const response = await fetch('https://courses-admin.kareemraafat2017.workers.dev/api/courses');
        const data = await response.json();
        
        const coursesGrid = document.querySelector('.courses-grid');
        if (!coursesGrid) return;
        
        coursesGrid.innerHTML = '';
        
        const isArabic = document.body.classList.contains('rtl') || 
                        document.documentElement.dir === 'rtl';
        
        data.forEach(course => {
            const title = isArabic ? course.title_ar || course.title : course.title;
            const description = isArabic ? 'دورة احترافية في ' + title : 'Professional course in ' + title;
            
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            
            courseCard.innerHTML = `
                <div class="image-wrapper">
                    <img class="course-image" src="https://placehold.co/600x400/8E11B2/white?text=${encodeURIComponent(title)}" alt="${title}">
                    <span class="course-level">Beginner</span>
                </div>
                <div class="course-content">
                    <h3 class="course-title">${title}</h3>
                    <p class="course-description">${description}</p>
                    <div class="course-meta">
                        <span class="meta-item"><i class="fas fa-clock"></i> 24 Weeks</span>
                        <span class="meta-item"><i class="fas fa-video"></i> 48 Lectures</span>
                    </div>
                    <div class="course-price">$${course.price} <small>/ All included</small></div>
                    <a href="#" class="course-btn">Enroll Now <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            coursesGrid.appendChild(courseCard);
        });
    } catch (error) {
        console.error('Error loading courses from API:', error);
        // Fallback to JSON file if API fails
        loadFromJSONFile();
    }
}

// Fallback function to load from JSON file
async function loadFromJSONFile() {
    try {
        const response = await fetch('/data/courses.json');
        const data = await response.json();
        const coursesGrid = document.querySelector('.courses-grid');
        if (!coursesGrid) return;
        
        coursesGrid.innerHTML = '';
        
        data.courses.forEach(course => {
            const title = course.title_en;
            const description = course.description_en;
            
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            
            courseCard.innerHTML = `
                <div class="image-wrapper">
                    <img class="course-image" src="${course.image}" alt="${title}">
                    <span class="course-level">${course.level_en}</span>
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
    } catch (error) {
        console.error('Error loading from JSON file:', error);
    }
}

// Run the function
displayCourses();
