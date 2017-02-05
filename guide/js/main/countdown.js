function getTimeRemainingForCountdown(){
	var now = new Date();
	var endOfHackathon = new Date(2017, 1, 5, 9, 30);


	var delta = Math.abs(endOfHackathon - now) / 1000;

	var days = Math.floor(delta / 86400);
	delta -= days * 86400;

	var hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;

	var minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;

	var seconds = delta % 60;
	seconds = Math.floor(seconds);

	if(minutes < 10){
		minutes = "0" + minutes;
	}
	if(seconds < 10){
		seconds = "0" + seconds;
	}

	return (days * 24 + hours).valueOf() + ":" + minutes.valueOf() + ":" + seconds.valueOf();
}
$(document).ready(function(){
	setTimeout(function(){
		$(".countdown-remaining-text").html("Remaining");
	}, 1000);
	setInterval(function(){
		$(".countdown-time").html(getTimeRemainingForCountdown());
	},1000);
});