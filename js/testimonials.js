// testimonials.js
function displayTestimonials() {
    fetch('/data/testimonials.json')
        .then(response => response.json())
        .then(data => {
            const testimonialsGrid = document.getElementById('testimonials-grid');
            if (!testimonialsGrid) return;
            testimonialsGrid.innerHTML = '';

            const isArabic = document.body.classList.contains('rtl') || 
                            document.documentElement.dir === 'rtl';

            data.testimonials.forEach(testimonial => {
                const name = isArabic ? testimonial.name_ar : testimonial.name_en;
                const title = isArabic ? testimonial.title_ar : testimonial.title_en;
                const text = isArabic ? testimonial.text_ar : testimonial.text_en;
                
                let stars = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= testimonial.rating) {
                        stars += '<i class="fas fa-star"></i>';
                    } else {
                        stars += '<i class="far fa-star"></i>';
                    }
                }
                
                const card = document.createElement('div');
                card.className = 'testimonial-card';
                
                card.innerHTML = `
                    <div class="quote-icon">
                        <i class="fas fa-quote-right"></i>
                    </div>
                    <div class="rating">${stars}</div>
                    <p class="testimonial-text">"${text}"</p>
                    <div class="student-info">
                        <img class="student-avatar" src="${testimonial.image}" alt="${name}">
                        <div class="student-details">
                            <h4>${name}</h4>
                            <span>${title}</span>
                        </div>
                    </div>
                `;
                
                testimonialsGrid.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading testimonials:', error));
}

displayTestimonials();