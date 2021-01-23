$(function () {
	$(window).scroll(function() {
		$('#ahead .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInDown");
			}
		});
	});	
	$(window).scroll(function() {
		$('.forward-time').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeIn delay-1s");
	            //$(this).addClass("animate__delay-3s");
	        }
	    });
	});
	$(window).scroll(function() {
		$('.forward-travel').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeIn delay-2s");
			}
		});
	});	
	$(window).scroll(function() {
		$('.forward-value').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeIn delay-3s");
			}
		});
	});
		$(window).scroll(function() {
		$('#future .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInLeft");
			}
		});
	});	
	$(window).scroll(function() {
		$('.form-wrapp').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInRight delay-1s");
			}
		});
	});
})