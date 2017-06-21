
$(document).ready(function(){

	/**
	 * Place stars on page
	 */
	var star_container = $('#scenery_intro .star_container');
	var positions = [ // use preset locations that look good but still sortof random.
		{ top: 4, left: 30 },{ top: 7, left: 36 },{ top: 9, left: 5 },{ top: 12, left: 95 },{ top: 8, left: 90 },{ top: 14, left: 93 },{ top: 10, left: 12 },{ top: 15, left: 20 },{ top: 40, left: 15 },{ top: 23, left: 12 },{ top: 28, left: 28 },{ top: 31, left: 34 },{ top: 31, left: 8 },{ top: 32, left: 87 },{ top: 38, left: 65 },{ top: 46, left: 30 },{ top: 58, left: 34 },{ top: 55, left: 18 },{ top: 54, left: 80 },{ top: 60, left: 28 },{ top: 67, left: 94 },{ top: 69, left: 13 },{ top: 64, left: 40 },
		{ top: 68, left: 56 },{ top: 7, left: 65 },{ top: 13, left: 67 },{ top: 45, left: 98 },{ top: 34, left: 79 },{ top: 24, left: 66 },{ top: 45, left: 84 },{ top: 76, left: 58 },{ top: 77, left: 45 },{ top: 16, left: 43 },{ top: 60, left: 68 }
	]
	positions.forEach(function(p) {
		var star = $('<img src="img/star.png" class="star">');
		var twinkle_period = Math.floor(Math.random() * 4) + 2; // subtle star twinkling effect

		star.css({
			top: p.top + '%',
			left: p.left + '%',
			'animation-duration': twinkle_period + 's'
		});
		star_container.append(star)
	}); 


	/**
	 * Setup clouds and animation
	 */
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

	var clouds_container = $('#scenery_intro .cloud_container')

	var clouds = [
		{ width: '130px', top: '8%' },
		{ width: '200px', top: '30%' },
		{ width: '250px', top: '15%' },
		{ width: '180px', top: '23%' }
	]
	clouds.forEach(function(sizes){
		var cloud = $('<img src="img/cloud.png" class="cloud">')
		var perc = Math.floor(Math.random() * 100) + 1;
		cloud.css({ left: perc + "%", width: sizes.width, top: sizes.top });

		clouds_container.append(cloud);
		cloud.fadeIn(1800).removeClass('hidden');
		setupCloudAnimation(cloud);
	});

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

