$(function () {
	// ===== preloader =====
	$(window).load(function(){
		$("#preloader_main").delay(500).fadeOut(500)
	})
	// ===== preloader =====
	// ===== fixed navbar operation =====
	$(window).scroll(function () {
		let scrollingTop = $(this).scrollTop();
		if (scrollingTop > 300) {
			$("#navbar").addClass("fixed_nav");
		} else {
			$("#navbar").removeClass("fixed_nav");
		}
	});
	// ===== fixed navbar operation =====
	// ===== back to top button btn operation =====
	$(window).scroll(function () {
		let scrollingTop = $(this).scrollTop();

		if (scrollingTop > 300) {
			$(".back_to_top").fadeIn(500);
		} else {
			$(".back_to_top").fadeOut(500);
		}
	});
	// ===== back to top button btn operation =====
	// ===== venobox operation =====
	new VenoBox({
		selector: ".presentation_video",
	});
	// ===== venobox operation =====
	// ===== counterUp operation =====
	$(".counter").counterUp({
		delay: 20,
		time: 2000,
	});
	// ===== counterUp operation =====
	// ===== slick slider operation ======
	$(".newpost_slider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: ".newpost_prev_btn",
		nextArrow: ".newpost_next_btn",
		autoplaySpeed: 2000,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 280,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
	// ===== slick slider operation ======
});

// ===== aos operation =====
// ===== aos operation =====

// ===== Designed bt AJOY SAHA =====
