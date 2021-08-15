// First slider
const swiper = new Swiper('.slider-home', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
});

// Second slider - review
const swiperReview = new Swiper('.review-carousel', {
	breakpoints: {
		768: {
			slidesPerView: 2,
			centeredSlides: true,
		},
		1200: {
			slidesPerView: 3,
		},
	},
	autoplay: {
		delay: 1000,
	},
	loop: true,
	centeredSlides: true,
	slidesPerView: 1,
	spaceBetween: 20,
});

// Form
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
});

// Search
const searchForm = document.getElementById('search');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const searchButton = document.getElementById('search-button');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
});

searchButton.addEventListener('click', () => {
	modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
	modal.classList.add('hidden');
});

// Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.header-navbar');

const menuBars = document.getElementById('menu-bars');
const menuTimes = document.getElementById('menu-times');

menuToggle.addEventListener('click', () => {
	nav.classList.toggle('displayed');
	menuTimes.classList.toggle('hidden');
	menuBars.classList.toggle('hidden');
});

// Menu reaction
function selectElement(id) {
	return document.querySelector(`#${id}`);
}

const sections = [
	selectElement('slider'),
	selectElement('popular-dishes'),
	selectElement('about-us'),
	selectElement('menu'),
	selectElement('review'),
	selectElement('order'),
];

const navItems = {
	slider: selectElement('sliderNav'),
	'popular-dishes': selectElement('popularDishesNav'),
	'about-us': selectElement('aboutUsNav'),
	menu: selectElement('menuNav'),
	review: selectElement('reviewNav'),
	order: selectElement('orderNav'),
};

const options = {
	threshold: 0.5,
};

function handleObserver(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const navItem = navItems[entry.target.id];
			navItem.classList.add('active');
			Object.values(navItems).forEach((item) => {
				if (item !== navItem) item.classList.remove('active');
			});
		}
	});
}

const observer = new IntersectionObserver(handleObserver, options);

sections.forEach((sec) => observer.observe(sec));
