// testimonials.js
function displayTestimonials() {
    fetch('/data/testimonials.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('testimonials-grid');
            if (!container) {
               
                return;
            }
            container.innerHTML = '';

            const isArabic = document.body.classList.contains('rtl') || 
                            document.documentElement.dir === 'rtl';

            data.testimonials.forEach(t => {
                const name = isArabic ? t.name_ar : t.name_en;
                const title = isArabic ? t.title_ar : t.title_en;
                const text = isArabic ? t.text_ar : t.text_en;
                
                let stars = '';
                for (let i = 1; i <= 5; i++) {
                    stars += i <= t.rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
                }
                
                const card = document.createElement('div');
                card.className = 'testimonial-card';
                card.innerHTML = `
                    <div class="quote-icon"><i class="fas fa-quote-right"></i></div>
                    <div class="rating">${stars}</div>
                    <p class="testimonial-text">"${text}"</p>
                    <div class="student-info">
                        <img class="student-avatar" src="${t.image}" alt="${name}">
                        <div class="student-details">
                            <h4>${name}</h4>
                            <span>${title}</span>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
}
displayTestimonials();
