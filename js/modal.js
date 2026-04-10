document.addEventListener('click', function(e) {
	/* Event Delegaton */
        const button = e.target.closest('.open-modal');
        if (button) {
            const modal = document.getElementById('contactModal');
            if (modal) {
                modal.style.display = 'flex';
            }
        }
    });

    const modal = document.getElementById('contactModal');
    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        const closeBtn = document.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }
    }
