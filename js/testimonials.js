// testimonials.js - Fetch from Admin Panel API
async function displayTestimonials() {
    try {
        const response = await fetch('https://courses-admin.kareemraafat2017.workers.dev/api/testimonials');
        const testimonials = await response.json();
        
        const testimonialsGrid = document.querySelector('.testimonials-grid');
        if (!testimonialsGrid) return;
        
        testimonialsGrid.innerHTML = '';
        
        const isArabic = document.body.classList.contains('rtl') || 
                        document.documentElement.dir === 'rtl';
        
        if (testimonials.length === 0) {
            testimonialsGrid.innerHTML = '<p>No testimonials yet. Add some from the admin panel.</p>';
            return;
        }
        
        testimonials.forEach(testimonial => {
            const name = isArabic ? (testimonial.name_ar || testimonial.name_en) : (testimonial.name_en || 'Student');
            const title = isArabic ? (testimonial.title_ar || testimonial.title_en) : (testimonial.title_en || 'Student');
            const text = isArabic ? (testimonial.text_ar || testimonial.text_en || 'Great experience!') : (testimonial.text_en || 'Great experience!');
            const rating = testimonial.rating || 5;
            const imageUrl = testimonial.image || `https://placehold.co/100x100/8E11B2/white?text=${encodeURIComponent(name.charAt(0))}`;
            
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                stars += i <= rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
            }
            
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            
            card.innerHTML = `
                <div class="quote-icon"><i class="fas fa-quote-right"></i></div>
                <div class="rating">${stars}</div>
                <p class="testimonial-text">"${text}"</p>
                <div class="student-info">
                    <img class="student-avatar" src="${imageUrl}" alt="${name}">
                    <div class="student-details">
                        <h4>${name}</h4>
                        <span>${title}</span>
                    </div>
                </div>
            `;
            
            testimonialsGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

displayTestimonials();
