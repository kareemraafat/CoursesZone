// modal.js
const modal = document.getElementById('contactModal');
const openButtons = document.querySelectorAll('.open-modal');
const closeBtn = document.querySelector('.close-modal');

openButtons.forEach(btn => {
    btn.addEventListener('click', () => modal.style.display = 'flex');
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
