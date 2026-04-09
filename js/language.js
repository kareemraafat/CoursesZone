// Language Toggle
const langFloat = document.getElementById('lang-toggle-float');
let isArabic = false;

function switchToEnglish() {
    document.querySelectorAll('.english-content').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.arabic-content').forEach(el => el.style.display = 'none');
    document.documentElement.dir = 'ltr';
    document.body.style.direction = 'ltr';
    document.body.style.textAlign = 'left';
    langFloat.innerHTML = 'AR';
    isArabic = false;
}

function switchToArabic() {
    document.querySelectorAll('.english-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.arabic-content').forEach(el => el.style.display = 'block');
    document.documentElement.dir = 'rtl';
    document.body.style.direction = 'rtl';
    document.body.style.textAlign = 'right';
    langFloat.innerHTML = 'EN';
    isArabic = true;
}

langFloat.addEventListener('click', () => {
    if (isArabic) {
        switchToEnglish();
    } else {
        switchToArabic();
    }
});

// Default English
switchToEnglish();