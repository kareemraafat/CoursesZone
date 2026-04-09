
    document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('contactModal');
        const openBtns = document.querySelectorAll('.open-modal');
        const closeBtn = document.querySelector('.close-modal');

        console.log('Modal found:', modal);
        console.log('Open buttons found:', openBtns.length);

        openBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('Button clicked');
                modal.style.display = 'flex';
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
