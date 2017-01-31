$(document).ready(function(){


	var html = '';
	for(var i = 0;i < qhacksExecSlack.length;i++){
		var currentExec = qhacksExecSlack[i];
		if(html != ""){
			html += ", ";
		}
		html += '<a href="' + currentExec['link'] + '" target="_blank">' + currentExec['name'] + '</a>';
	}
	$("#contacting-qhacks-exec").html(html);
});