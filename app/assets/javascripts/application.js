//= require jquery
//= require jquery.flexslider
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require owl.carousel

/*------------------------------------------
	FixedTop Navigation
 ------------------------------------------*/

(function(){

	var $nav = $('#fixedTopNav');

  function navbarAnimation() {
      if ($(window).scrollTop() > 0) {
      	$nav.addClass('navbar-solid');
      	return;
      }

      $nav.removeClass('navbar-solid');
      $(".navbar-nav > li > a").blur();
  }

  navbarAnimation();

  $(window).scroll(function() {
	    navbarAnimation();
  });

})();

// // Cache selectors
// var topMenu = $("#fixedTopNav"),
//     topMenuHeight = topMenu.outerHeight()+15,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//       var item = $($(this).attr("href"));
//       if (item.length) { return item; }
//     });
//
// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;
//
//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
//    // Set/remove active class
//    menuItems
//      .parent().removeClass("active")
//      .end().filter("[href='#"+id+"']").parent().addClass("active");
// });​

 //jQuery for page scrolling feature - requires jQuery Easing plugin
 $(function() {
    $('a.page-scroll').on('click', function(event) {
      event.preventDefault();
      var $anchor = $(this);
      $('html, body').animate({
        scrollTop: $($anchor.attr('href')).offset().top - $('#fixedTopNav').outerHeight()
      }, 1500);
    });
 });

/* Scroll to top */
$(window).scroll(function() {
	var $toTop = $('#totop');
	if ($(this).scrollTop() > 100) {
		$toTop.fadeIn();
	} else {
		$toTop.fadeOut();
	}
});
$("a[href='#totop']").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

/*------------------------------------------
 Testimonial carousel
 ------------------------------------------*/

(function () {

    var $testimonialCarousel = $("#testimonials-carousel"),
        $reviews = $(".review"),
        $clientFace = $("#clientFace");

    $testimonialCarousel.owlCarousel({
        singleItem: true,
        autoPlay: true,
        pagination: false,
        autoHeight: true,
        beforeMove: function(parm){
            var owl = $testimonialCarousel.data('owlCarousel');
            var image = $reviews[owl.currentItem];
            image = $(image).data('client-image');
            //console.log(image);
            $clientFace.css('background-image', 'url('+image+')');

        }

    });

    $('.carosel-wrapper .prev').click(function(e){
        e.preventDefault();
        $testimonialCarousel.trigger('owl.prev');
    });
    $('.carosel-wrapper .next').click(function(e){
        e.preventDefault();
        $testimonialCarousel.trigger('owl.next');
    });

})();

/*------------------------------------------
 Logo Slider
 ------------------------------------------*/

$(document).ready(function () {
    //Client Carousel
    $("#client-carousel").owlCarousel({
        items: 6,
        itemsDesktopSmall: 4,
        itemsTablet: 4,
        itemsMobile: 2,
        autoPlay: true
    });
});
