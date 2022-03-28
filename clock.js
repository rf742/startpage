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

var dat = new Date();
dat = dat.getHours();
if (dat < 6 || dat > 20) {
document.getElementById("mycheckbox").checked = true;
document.documentElement.setAttribute('data-theme', 'dark');
}
