function startTime() {
	var d = new Date();
	var hr = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	hr = checkTime(hr);
	min = checkTime(min);
	sec = checkTime(sec);
	document.getElementById("clock").innerHTML = hr + ":" + min + ":"+ sec;
	var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i){
	if (i<10) { i = "0" + i;} return i;
}
