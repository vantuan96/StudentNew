(function($){
	$(document).ready(function (){

		$('.of-iconmntop').click(function(){
			$('.of-menutop').toggleClass('of-mnshow');
		});
		$('.of-search').click(function(){
			$('.of-searchbox').show(200);
		});
		$('.of-closesearch').click(function(){
			$('.of-searchbox').hide(200);
		});

        $('.ga-b2-color li').click(function(){
            $('.ga-b2-color li').removeClass('active');
            $(this).addClass('active');
        });

		$('.ga-iconmenu').click(function(){
			$('.ga-mnul').toggleClass('ga-mnshow');
		});

		$('.of-news-slick').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			arrows: false,
			variableWidth: true
		});

		var heightTop = $(".of-header").height() + $(".ga-b1").height();
		$(window).bind('scroll', function () {
			if ($(window).scrollTop() > heightTop) {
				$('.ga-mn').addClass('ga-mnfixed');
			} else {
				$('.ga-mn').removeClass('ga-mnfixed');
			}
		});
		$('.ga-mnul li').click(function(){
			$('.ga-mnul li').removeClass('active');
			$(this).addClass('active');
		});

		wow = new WOW({
			animateClass: 'animated',
			offset: 60
		});
		wow.init();

        $(".ga-bnod").click(function (){
            $('html, body').animate({ scrollTop: $(".ga-b2").offset().top - 60 }, 1000);
        });
		$(".ga-dathang").click(function (){
			$('html, body').animate({ scrollTop: $(".ga-b2").offset().top - 60 }, 1000);
		});
		$(".ga-thele").click(function (){
			$('html, body').animate({ scrollTop: $(".ga-b3").offset().top - 60 }, 1000);
		});
		$(".ga-danhsach").click(function (){
			$('html, body').animate({ scrollTop: $(".ga-luser").offset().top - 60 }, 1000);
		});
		$(".ga-sosanh").click(function (){
			$('html, body').animate({ scrollTop: $(".ga-b9").offset().top - 60 }, 1000);
		});
	});
})(window.jQuery);