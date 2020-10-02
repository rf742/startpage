function greet(){
d = new Date();
hr = d.getHours();
let greet = "hello";
if (hr < 5) {
	greet = "Welcome to after hours!";
}
else if (hr < 12) {
	greet = "Good morning";
}
else if (hr < 17) {
	greet = "Good afternoon";
}
else if (hr < 21) {
	greet = "Good evening";
}
else	{
	greet = "Good night";
}
document.getElementById("greeting").innerText = greet;
}
