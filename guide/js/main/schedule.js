function getCurrentTimestamp(){
	var today = new Date();

	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	var hh = today.getHours();
	var ii = today.getMinutes();
	var ss = today.getSeconds();

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
	console.log(s);
	console.log(schedule);

	//s = "02-03-2017 23:05:00";

	var html = '';
	var scheduleItems = 0;
	for(var i = 0;i < schedule.length;i++){
		var scheduleItem = schedule[i];
		console.log(scheduleItem);
		if(s < scheduleItem['eventEndTime']){
			html += '<tr><td>' + scheduleItem['name'] + '</td><td>' + scheduleItem['location'] + '</td><td>' + scheduleItem['timeDisplayed'] + '</td></tr>';
			
			scheduleItems++;
			if(scheduleItems == 5){
				break;
			}
		}else{
			console.log("higher");
		}
	}

	if(html == ''){
		html = '<p>No more upcoming events.</p>';
	}else{
		html = '<table class="table table-bordered schedule-table"><tr><th>Upcoming Event</th><th>Location</th><th>Time</th></tr>' + html + '</table>';
	}
	$("#schedule-content").html(html);
});