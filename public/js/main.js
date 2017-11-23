var pipe = document.getElementById("pipe");
//Change pipe to stack on mobile
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 500px
		pipe.innerHTML = "|";
  } else {
    // window width is less than 500px
		pipe.innerHTML = "<br>";
  }

}
$(document).ready(function(){

	// hide mlh badge when scrolling
	var hidden = false;
	$(document).scroll(function(){
	    if($(this).scrollTop()>=$('#features-promo').position().top){
	        if (!hidden) {
	        	$("#mlh-trust-badge").fadeOut(800);
	        	hidden = true;
	   		}
	    }else{
	        if (hidden) {
	        	$("#mlh-trust-badge").fadeIn('fast');
	        	hidden = false;
	        }
	    }
	});
});
