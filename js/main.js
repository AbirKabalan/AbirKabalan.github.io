'use strict';

$(document).ready(function(){
  $(".editor-header a").click(function(e){
    e.preventDefault();

    var _val = $(this).data("role"),
        _sizeValIn = parseInt($(this).data("size-val") + 1),
        _sizeValRe = parseInt($(this).data("size-val") - 1),
        _size = $(this).data("size");
    if(_size == "in-size"){
      document.execCommand(_val, false, _sizeValIn + "px");
    } else{
      document.execCommand(_val, false, _sizeValRe + "px");
    }
  });
});


$(document).ready(function(){
	var $comment = $("#text"),
	$submit = $("#commentform input[type='submit']"),
   	$listComment = $("#list-comments"),
    	$loading = $(".loading"),
    	comment,
    	$totalCom = $(".total-comment");
	$totalCom.text($("#list-comments > div").length);
	
	$($submit).click(function(){
		comment = $comment.html();
	
		if(comment == "") {
			alert("Please write a comment");
		}
		else {
			$loading.show().fadeOut(300);
			$listComment.append("<div>"+comment+"</div>");
			$totalCom.text($("#list-comments > div").length);	
		}
	});
});

$(document).ready(function() {
	$("#info").click(function(){
		$("#more").slideToggle("slow");
		
	});
});

$(document).ready(function() {
	$("#contact").click(function(){
		$("#contactform").slideToggle("slow");
		
	});
});

$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='index.html']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});











































