const API_URL = 'https://blog-worker.kareemraafat2017.workers.dev/api/blog';

async function loadBlog() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        const container = document.getElementById('blogGrid');
        
        // Detect language
        const isArabic = document.body.classList.contains('rtl') || 
                        document.documentElement.dir === 'rtl';
        
        if (posts.length === 0) {
            container.innerHTML = '<div class="loading">No articles yet. Check back soon!</div>';
            return;
        }
        
        let html = '';
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            const title = isArabic && post.title_ar ? post.title_ar : post.title_en;
            const content = isArabic && post.content_ar ? post.content_ar : post.content_en;
            
            // Get excerpt
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content || '';
            const text = tempDiv.textContent || '';
            const excerpt = text.substring(0, 120) + (text.length > 120 ? '...' : '');
            
            html += `
                <div class="blog-card">
                    ${post.image ? `<img class="blog-image" src="${post.image}" alt="${title}">` : ''}
                    <div class="blog-card-content">
                        <h3 class="blog-card-title">${title}</h3>
                        <p class="blog-card-excerpt">${excerpt}</p>
                        <div class="blog-card-meta">
                            <span>📅 ${post.date}</span>
                            <span>✍️ ${post.author || 'Admin'}</span>
                            <a href="post.html?id=${post.id}" class="blog-read-more">${isArabic ? 'اقرأ المزيد →' : 'Read More →'}</a>
                        </div>
                    </div>
                </div>
            `;
        }
        container.innerHTML = html;
    } catch (error) {
        console.error('Error loading blog:', error);
        document.getElementById('blogGrid').innerHTML = '<div class="loading">Error loading articles. Please try again.</div>';
    }
}

loadBlog();