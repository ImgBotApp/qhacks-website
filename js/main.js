
$(document).ready(function(){
	var easing = {
      left: "linear"
    };

	var cloud1 = $('#first_section .cloud_1');
	var cloud2 = $('#first_section .cloud_2');
	var cloud3 = $('#first_section .cloud_3');
	var cloud4 = $('#first_section .cloud_4');

	// var cloud1Percent = 80.0;
	// var cloud2Percent = 20.0;
	// var cloud3Percent = 10.0;
	// var cloud4Percent = 60.0;
	// setInterval(function(){
	// 	cloud1Percent+=0.001
	// 	cloud2Percent+=0.002
	// 	cloud3Percent+=0.003
	// 	cloud4Percent+=0.004

	// 	cloud1.animate({"left":cloud1Percent+"%"},10,"linear")
	// 	cloud2.animate({"left":cloud2Percent+"%"},10,"linear")
	// 	cloud3.animate({"left":cloud3Percent+"%"},10,"linear")
	// 	cloud4.animate({"left":cloud4Percent+"%"},10,"linear")
	// },10);
cloud1Func();
cloud2Func();
cloud3Func();
cloud4Func();

function cloud1Func(){
	cloud1.animate({
		left: "+=70%"
	},{
		duration:110000,
		specialEasing: easing,
		step: function(now,fx) {
			if (now>=100){
				console.log(now)
				cloud1.stop();
				cloud1.finish();
			}
		},
		always:function(now,fx){
			setTimeout(function(){
				cloud1.css("left","-20%");
				cloud1Func();

			},100)
			
		}
	});
}
function cloud2Func(){
	cloud2.animate({
		left: "+=120%"
	},{
		duration:110000,
		specialEasing: easing,
		step: function(now,fx) {
			if (now>=100){
				cloud2.stop();
				cloud2.finish();
			}
		},
		always:function(now,fx){
			setTimeout(function(){
				cloud2.css("left","-20%");
				cloud2Func();
			},100)
			
		}
	});
}
function cloud3Func(){
	cloud3.animate({
		left: "+=90%"
	},{
		duration:110000,
		specialEasing: easing,
		step: function(now,fx) {
			if (now>=100){
				cloud3.stop();
				cloud3.finish();
			}
		},
		always:function(now,fx){
			setTimeout(function(){
				cloud3.css("left","-20%");
				cloud3Func();
			},100)
			
		}
	}); 
}
function cloud4Func(){
	cloud4.animate({
		left: "+=60%"
	},{
		duration:110000,
		specialEasing: easing,
		step: function(now,fx) {
			if (now>=100){
				cloud4.stop();
				cloud4.finish();
			}
		},
		always:function(now,fx){
			setTimeout(function(){
				cloud4.css("left","-20%");
				cloud4Func();
			},100)
			
		}
	});
}


});

