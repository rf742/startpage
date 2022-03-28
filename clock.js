function startTime() {
	var d = new Date();
	var hr =  checkTime(d.getHours());
	var min = checkTime(d.getMinutes());
	var sec = checkTime(d.getSeconds());
	document.getElementById("clock").innerHTML = hr + ":" + min + ":"+ sec;
	var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i){
	return i<10 ? "0" + i : i;
}
