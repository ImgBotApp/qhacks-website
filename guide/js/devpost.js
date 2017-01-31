$(document).ready(function(){
	if(lastTwoHoursOfCompetition()){
		showDevPost();
	}
});
function lastTwoHoursOfCompetition(){
	var now = new Date();
	// var endOfHackathon = new Date(2017, 0, 31, 16, 35);
	var endOfHackathon = new Date(2017, 1, 5, 13, 0);

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

	return ((hours + days * 24) < 2);
}
function showDevPost(){
	$("#devpost-submission-area").html('<div class="submission-time-wrapper"><p class="submission-time-text">It\'s time to submit! You can submit to our Dev Post: <a href="https://qhacks2017.devpost.com" target="_blank" class="submission-link">https://qhacks2017.devpost.com</a></p><p class="submission-time-help-text">If you have any questions about this process, please reach out to a QHacks Exec member ASAP</p></div>');
}