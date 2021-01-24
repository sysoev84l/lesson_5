$(function () {
	$(window).scroll(function() {
		$('#ahead .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animate__zoomIn");
			}
		});
	});	
	$(window).scroll(function() {
		$('.forward-time').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animate__bounceIn animate__delay-1s");
	            //$(this).addClass("animate__delay-3s");
	        }
	    });
	});
	$(window).scroll(function() {
		$('.forward-travel').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animate__flipInX animate__delay-2s");
			}
		});
	});	
	$(window).scroll(function() {
		$('.forward-value').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animate__jackInTheBox animate__delay-3s");
			}
		});
	});
		$(window).scroll(function() {
		$('#future .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animate__fadeInTopLeft");
			}
		});
	});	
	$(window).scroll(function() {
		$('.form-wrapp').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animate__fadeInBottomRight animate__delay-1s");
			}
		});
	});
})