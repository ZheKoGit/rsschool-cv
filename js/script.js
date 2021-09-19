const menuIcon = document.querySelector('.menu-icon');
const mainNav = document.querySelector('.main-nav');

menuIcon.addEventListener('click', function () {
	mainNav.classList.toggle('_active');
	menuIcon.classList.toggle('_active');
	document.body.classList.toggle('_lock');
})

const navLink = mainNav.querySelectorAll('.nav-link');
for (link of navLink) {
	link.addEventListener('click', function () {
		mainNav.classList.toggle('_active');
		menuIcon.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	})
}

const iconHomeLink = document.querySelector('.icon-home-link');
document.addEventListener('scroll', function () {
	iconHomeLink.classList.add('_active');
	if (window.pageYOffset === 0) {
		iconHomeLink.classList.remove('_active');
	}
	console.log(window.pageYOffset);
})