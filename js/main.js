
$(document).ready(function(){

	// setup clouds
	var easing = {
      left: "linear"
    };

	var cloud1 = $('#first_section .cloud_1');
	var cloud2 = $('#first_section .cloud_2');
	var cloud3 = $('#first_section .cloud_3');
	var cloud4 = $('#first_section .cloud_4');

	// setupClouds(cloud2);
	// setupClouds(cloud3);
	// setupClouds(cloud4);
	// setupClouds(cloud1);


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


	// setup scroll buttons
	$("#btn_learnmore").click(function(){
		$("html, body").animate({ scrollTop: $('#about_header').offset().top-20 }, 600);
	});
	$("#btn_sponsorship").click(function(){
		$("html, body").animate({ scrollTop: $('#sponsor_header').offset().top-20 }, 600);
	});


	// setup fade in

	var tower = $("#first_section .clock_tower");
	var buildings = $("#first_section .buildings");
	var hillLeft = $("#first_section .hill_left");
	var hillRight = $("#first_section .hill_right");
	var logoAndTitle = $("#first_section #logo_and_title");
	var clouds = [cloud1,cloud2,cloud3,cloud4];

	hillLeft.fadeIn(1200).removeClass('hidden');
	hillRight.fadeIn(800).removeClass('hidden');
	tower.fadeIn(1600).removeClass('hidden');
	buildings.fadeIn(1600).removeClass('hidden');
	logoAndTitle.fadeIn(1800).removeClass('hidden');

	clouds.forEach(function(c){
		// console.log(c)

		var perc = Math.floor(Math.random() * 100) + 1;
		console.log(perc) 
		c.css("left",perc+"%");

		c.fadeIn(1800).removeClass('hidden');
		setupClouds(c);


	});

	// hide mlh badge
	var hidden = false;
	$(document).scroll(function(){
	    if($(this).scrollTop()>=$('#about_header').position().top){
	        if (!hidden) {
	        	$("#mlh-trust-badge").hide();
	        	hidden = true;
	   		}
	    }else{
	        if (hidden) {
	        	$("#mlh-trust-badge").show();
	        	hidden = false;
	        }
	    }
	});


});

