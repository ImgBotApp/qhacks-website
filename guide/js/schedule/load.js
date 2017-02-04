function getCurrentTimestamp(){
	var today = new Date();

	var dd = today.getDate().valueOf();
	var mm = (today.getMonth()+1).valueOf();
	var yyyy = today.getFullYear().valueOf();
	var hh = today.getHours().valueOf();
	var ii = today.getMinutes().valueOf();
	var ss = today.getSeconds().valueOf();

	if(dd<10){
		dd='0'+dd;
	} 
	if(mm<10){
		mm='0'+mm;
	}
	if(hh<10){
		hh='0'+hh;
	} 
	if(ii<10){
		ii='0'+ii;
	}

	if(ss<10){
		ss='0'+ss;
	}	

	return mm.valueOf() + "-" + dd.valueOf() + "-" + yyyy.valueOf() + " " + hh.valueOf() + ":" + ii.valueOf() + ":" + ss.valueOf();
}
$(document).ready(function(){
	var s = getCurrentTimestamp();

	//s = "02-03-2017 23:05:00";
	console.log(s);

	var pastEventsHTML = '';
	var upcomingEventsHTML = '';
	for(var i = 0;i < schedule.length;i++){
		var scheduleItem = schedule[i];

		if(s < scheduleItem['eventEndTime']){
			//upcoming events
			upcomingEventsHTML += '<tr><td>' + scheduleItem['name'] + '</td><td>' + scheduleItem['location'] + '</td><td>' + scheduleItem['dateDisplayed'] + '</td><td>' + scheduleItem['timeDisplayed'] + '</td></tr>';
		}else{
			//past events
			pastEventsHTML += '<tr><td>' + scheduleItem['name'] + '</td><td>' + scheduleItem['location'] + '</td><td>' + scheduleItem['dateDisplayed'] + '</td><td>' + scheduleItem['timeDisplayed'] + '</td></tr>';
		}
	}

	if(upcomingEventsHTML != ""){
		upcomingEventsHTML = '<div class="row upcoming-row"><div class="col-sm-10 col-sm-offset-1"><h2 class="schedule-title">Upcoming Events</h2></div><div class="col-sm-10 col-sm-offset-1"><table class="table table-bordered schedule-table"><tr><th>Event</th><th>Location</th><th>Date</th><th>Time</th></tr>' + upcomingEventsHTML + '</table></div></div>';
	}
	if(pastEventsHTML != ""){
		pastEventsHTML = '<div class="row upcoming-row"><div class="col-sm-10 col-sm-offset-1"><h2 class="schedule-title">Past Events</h2></div><div class="col-sm-10 col-sm-offset-1"><table class="table table-bordered schedule-table"><tr><th>Event</th><th>Location</th><th>Date</th><th>Time</th></tr>' + pastEventsHTML + '</table></div></div>';
	}

	$("#upcoming-content").html(upcomingEventsHTML);
	$("#past-content").html(pastEventsHTML);
});