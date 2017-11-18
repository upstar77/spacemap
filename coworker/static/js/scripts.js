
function scroll_to(clicked_link, nav_height) {
	// var element_class = clicked_link.attr('href').replace('#', '.');
	// var scroll_to = 0;
	// if(element_class != '.top-content') {
	// 	element_class += '-container';
	// 	scroll_to = $(element_class).offset().top - nav_height;
	// }
	// if($(window).scrollTop() != scroll_to) {
	// 	$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	// }
}


jQuery(document).ready(function() {
 $.urlParam = function(name, url){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url || window.location.href);
        if (results==null){
           return null;
        }
        else{
           return decodeURI(results[1]) || 0;
        }
    };

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), 0);
	});

    /*
        Background slideshow
    */

    var main_backstretch_src = $('.top-content').attr("data-backstretch-src");
    if(main_backstretch_src) {
      $('body.index .top-content').backstretch(main_backstretch_src);
    }
    // $('.call-to-action-1').backstretch("assets/img/backgrounds/1.jpg");
    // $('.testimonials-container').backstretch("assets/img/backgrounds/2.jpg");
    // $('.call-to-action-2').backstretch("assets/img/backgrounds/2.jpg");

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });

    /*
        Wow
    */
    new WOW().init();

    /*
	    Modals
	*/
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});


	$(".btn-link-1").click(function() {
		$(".btn-link-1").removeClass("active");
		$(this).addClass("active");
		$(".auth-forms").hide();
		$($(this).attr("href")).show();
	});



	$(".inner-menu a").each(function(i) {
		if ($.urlParam("f") === null) {
			$(".inner-menu a").eq(0).parent().addClass("Active");
			return
		}
		if ($.urlParam('f', $(this).attr("href")) === $.urlParam("f")) {
			$(this).parent().addClass("active");
			return;
		}
	});

//	SEARCH

	//SEARCH END
});


jQuery(window).load(function() {

	/*
		Hidden images
	*/
	$(".modal-body img, .testimonial-image img").attr("style", "width: auto !important; height: auto !important;");

});
