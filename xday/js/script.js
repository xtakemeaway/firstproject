/*Инициализация библиотеки jQuery*/
$(document).ready( function() {
	$('.burger-menu').click(function () {
		$('.navigation__list').toggleClass('active');
	});
	$('.burger-menu').click(function () {
		$('.header__options').toggleClass('active');
	});
	$('.burger-menu').click(function () {
		$(this).toggleClass('open');
	});
});


let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
	slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 992px
		635: {
			slidesPerView: 2,
			spaceBetween: 80,
		},
		993: {
			slidesPerView: 3,
			spaceBetween: 35,
		},
	}
});