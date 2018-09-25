
var $myCarousel = $('#myCarousel');

$myCarousel.carousel();

(function($) {
function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';

  elems.each(function () {
    var $this = $(this),
        $animationType = $this.data('animation');

    // Add animate.css classes to
    // the elements to be animated
    // Remove animate.css classes
    // once the animation event has ended
    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
    });
  });
}

// Select the elements to be animated
// in the first slide on page load
var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
  .find('[data-animation ^= "animated"]');

// Apply the animation using the doAnimations()function
doAnimations($firstAnimatingElems);

// Attach the doAnimations() function to the
// carousel's slide.bs.carousel event
$myCarousel.on('slide.bs.carousel', function (e) {
  // Select the elements to be animated inside the active slide
  var $animatingElems = $(e.relatedTarget)
    .find("[data-animation ^= 'animated']");
  doAnimations($animatingElems);
});
})(jQuery);

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
	   
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });
	

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});













