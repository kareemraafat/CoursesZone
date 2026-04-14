const API_URL = 'https://blog-worker.kareemraafat2017.workers.dev/api/blog';

async function loadBlog() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        const container = document.getElementById('blogGrid');
        
        const isArabic = document.body.classList.contains('rtl') || 
                        document.documentElement.dir === 'rtl';
        
        if (posts.length === 0) {
            container.innerHTML = '<div class="loading">✨ No articles yet. Check back soon!</div>';
            return;
        }
        
        // ترتيب المقالات من الأحدث للأقدم
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        let html = '';
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            const title = isArabic && post.title_ar ? post.title_ar : post.title_en;
            const content = isArabic && post.content_ar ? post.content_ar : post.content_en;
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content || '';
            const text = tempDiv.textContent || '';
            const excerpt = text.substring(0, 120) + (text.length > 120 ? '...' : '');
            
            const categoryNames = {
                news: isArabic ? 'أخبار' : 'News',
                tips: isArabic ? 'نصائح' : 'Tips',
                tutorials: isArabic ? 'دروس' : 'Tutorials'
            };
            const categoryName = categoryNames[post.category] || (isArabic ? 'عام' : 'General');
            
            html += `
                <div class="blog-card">
                    ${post.image ? `
                    <div class="image-wrapper">
                        <img class="blog-image" src="${post.image}" alt="${title}">
                    </div>
                    ` : ''}
                    <div class="blog-card-content">
                        <span class="blog-card-category">${categoryName}</span>
                        <h3 class="blog-card-title">${title}</h3>
                        <p class="blog-card-excerpt">${excerpt}</p>
                        <div class="blog-card-meta">
                            <span>📅 ${post.date}</span>
                            <span>✍️ ${post.author || (isArabic ? 'مدير' : 'Admin')}</span>
                        </div>
                        <a href="post.html?id=${post.id}" class="blog-read-more">
                            ${isArabic ? 'اقرأ المزيد' : 'Read More'} →
                        </a>
                    </div>
                </div>
            `;
        }
        container.innerHTML = html;
    } catch (error) {
        console.error('Error loading blog:', error);
        document.getElementById('blogGrid').innerHTML = '<div class="loading">⚠️ Error loading articles. Please refresh.</div>';
    }
}

loadBlog();
