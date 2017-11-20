
$(document).ready(function(){
	// hide mlh badge when scrolling
	var hidden = false;
	$(document).scroll(function(){
	    if($(this).scrollTop()>=$('#about_header').position().top){
	        if (!hidden) {
	        	$("#mlh-trust-badge").fadeOut();
	        	hidden = true;
	   		}
	    }else{
	        if (hidden) {
	        	$("#mlh-trust-badge").fadeIn();
	        	hidden = false;
	        }
	    }
	});

});
