
$(document).ready(function(){

	// setup clouds
	var easing = {
      left: "linear"
    };

	var cloud1 = $('#scenery_intro .cloud_1');
	var cloud2 = $('#scenery_intro .cloud_2');
	var cloud3 = $('#scenery_intro .cloud_3');
	var cloud4 = $('#scenery_intro .cloud_4');

	function setupClouds(cloud){

		var randVal = Math.floor(Math.random() * 100000) + 1;
		cloud.animate({
			left: "+=130%"
		},{
			duration:130000+randVal,
			specialEasing: easing,
			step: function(now,fx) {
				if (now>=100){
					cloud.stop();
					cloud.finish();
				}
			},
			always:function(now,fx){
				setTimeout(function(){
					cloud.css("left","-20%");
					setupClouds(cloud);
				},100)
				
			}
		});
	}

	// setup fade in

	var tower = $("#scenery_intro .clock_tower");
	var buildings = $("#scenery_intro .buildings");
	var hillLeft = $("#scenery_intro .hill_left");
	var hillRight = $("#scenery_intro .hill_right");
	var logoAndTitle = $("#scenery_intro #header-title");
	var clouds = [cloud1,cloud2,cloud3,cloud4];

	// hillLeft.removeClass('hidden');
	// hillRight.removeClass('hidden');
	// tower.removeClass('hidden');
	// buildings.removeClass('hidden');
	// logoAndTitle.removeClass('hidden');

	hillLeft.fadeIn(1200).removeClass('hidden');
	hillRight.fadeIn(800).removeClass('hidden');
	tower.fadeIn(1600).removeClass('hidden');
	buildings.fadeIn(1600).removeClass('hidden');
	logoAndTitle.fadeIn(1800).removeClass('hidden');

	clouds.forEach(function(c){
		var perc = Math.floor(Math.random() * 100) + 1;
		console.log(perc) 
		c.css("left",perc+"%");

		c.fadeIn(1800).removeClass('hidden');
		setupClouds(c);
	});

	// setup scroll buttons
	// $("#btn_learnmore").click(function(){
	// 	$("html, body").animate({ scrollTop: $('#about_header').offset().top-20 }, 600);
	// });
	$("#btn_sponsorship").click(function(){
		$("html, body").animate({ scrollTop: $('#sponsor_header').offset().top-20 }, 600);
	});

	$("#btn_register, #btn_register_footer").click(function(){
		$("#subscription_overlay").fadeIn();
	});
	$("#subscription_overlay").click(function(){
		$("#subscription_overlay").fadeOut();
	});
	$("#subscription_overlay .signup_container").click(function(e) {
	   e.stopPropagation();
	})


	// hide mlh badge
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

	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	});


});

