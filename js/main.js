const menuBar = document.getElementById('menu-bar');
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');

menuBar.addEventListener("click",function(){
    menu.classList.toggle('show-nav');
	toggleIcon();
});

function toggleIcon(){
	if(menuBar.classList.contains('fa-bars')){
		menuBar.classList.remove('fa-bars');
        menuBar.classList.add('fa-times');
	} else {
		menuBar.classList.remove('fa-times');
        menuBar.classList.add('fa-bars');
	}
}

document.addEventListener('click', function(event) {
    const isClickInsideNav = nav.contains(event.target);
    const isMenuOpen = menu.classList.contains('show-nav');
    
    if (!isClickInsideNav && isMenuOpen && window.innerWidth < 768) {
        menu.classList.remove('show-nav');
        if (menuBar.classList.contains('fa-times')) {
            menuBar.classList.remove('fa-times');
            menuBar.classList.add('fa-bars');
        }
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        menu.classList.remove('show-nav');
        if (menuBar.classList.contains('fa-times')) {
            menuBar.classList.remove('fa-times');
            menuBar.classList.add('fa-bars');
        }
    }
});

const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            menu.classList.remove('show-nav');
            if (menuBar.classList.contains('fa-times')) {
                menuBar.classList.remove('fa-times');
                menuBar.classList.add('fa-bars');
            }
        }
    });
});

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        menuLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});


// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});