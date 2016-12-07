
$(document).ready(function(){

	$(".thumbnail").click(function(){
		$(this).find(".bio").fadeIn();
	});

	$(".thumbnail .close, .thumbnail .bio").click(function(event){
	    event.stopPropagation();
  		event.preventDefault();
		$(".thumbnail .bio").fadeOut();
		return false;
	});

	$(".thumbnail .bio div.tehactualbio").click(function(event){
	    event.stopPropagation();
  		event.preventDefault();
		return false;
	});


	// setup clouds
	function setupCloudAnimation(cloud){

		var randVal = Math.floor(Math.random() * 100000) + 1;
		cloud.animate({
			left: "+=130%"
		},{
			duration:130000+randVal,
			specialEasing: {
		      left: "linear"
		    },
			step: function(now,fx) {
				if (now>=100){
					cloud.stop();
					cloud.finish();
				}
			},
			always:function(now,fx){
				setTimeout(function(){
					cloud.css("left","-20%");
					setupCloudAnimation(cloud);
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
	var sceneryIntro = $("#scenery_intro");

	var cloud1 = $('<img class="cloud cloud_1" src="img/cloud.png">');
	var cloud2 = $('<img class="cloud cloud_2" src="img/cloud.png">');
	var cloud3 = $('<img class="cloud cloud_3" src="img/cloud.png">');
	var cloud4 = $('<img class="cloud cloud_4" src="img/cloud.png">');
	var clouds = [cloud1,cloud2,cloud3,cloud4];

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		// hillLeft.removeClass('hidden');
		// hillRight.removeClass('hidden');
		// tower.removeClass('hidden');
		// buildings.removeClass('hidden');
		// logoAndTitle.removeClass('hidden');

		clouds.forEach(function(c){
			c.remove();
		});
	}else{
		// hillLeft.fadeIn(1200).removeClass('hidden');
		// hillRight.fadeIn(800).removeClass('hidden');
		// tower.fadeIn(1600).removeClass('hidden');
		// buildings.fadeIn(1600).removeClass('hidden');
		// logoAndTitle.fadeIn(1800).removeClass('hidden');

		// clouds.forEach(function(c){
		// 	var perc = Math.floor(Math.random() * 100) + 1;
		// 	console.log(perc) 
		// 	c.css("left",perc+"%");

		// 	sceneryIntro.append(c);
		// 	c.fadeIn(1800).removeClass('hidden');
		// 	setupCloudAnimation(c);
		// });
	}

	// setup scroll buttons
	// $("#btn_sponsorship").click(function(){
	// 	$("html, body").animate({ scrollTop: $('#sponsor_header').offset().top-20 }, 600);
	// });

/*
	$("#signup_to_be_emailed").click(function(){
		console.log("sdf");
		$("#subscription_overlay .signup_container .sendgrid-subscription-widget input[type=submit]")
			.addClass("btn btn_main orange_btn main_btn");
		$("#subscription_overlay").fadeIn();
	});
	$("#subscription_overlay").click(function(){
		$("#subscription_overlay").fadeOut();
	});
	$("#subscription_overlay .signup_container").click(function(e) {
	   e.stopPropagation();
	})
*/

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

