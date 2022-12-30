$("#home-section").owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	smartSpeed: 1500,
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});

$("#Featured").owlCarousel({
	loop: true,
	margin: 10,
	dot: true,
	smartSpeed: 1000,
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		400: {
			items: 2,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 4,
		},
	},
});

$("#top-catagories").owlCarousel({
	loop: true,
	margin: 10,
	dot: true,
	smartSpeed: 1000,
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		100: {
			items: 1,
		},
		200: {
			items: 1,
		},
		300: {
			items: 1,
		},
		400: {
			items: 1,
		},
		500: {
			items: 1,
		},
		600: {
			items: 2,
		},
		700: {
			items: 1,
		},
		800: {
			items: 2,
		},
		900: {
			items: 2,
		},
		1000: {
			items: 4,
		},
	},
});
// about us Page
$("#client-say").owlCarousel({
	loop: true,
	margin: 10,
	dot: true,
	smartSpeed: 1000,
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		400: {
			items: 1,
		},
		500: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});

$(document).ready(function () {
	$("#liveToastBtn").click(function () {
		$(".toast").toast("show");
	});
});
