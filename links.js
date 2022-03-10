const linuxyoutube = [
{
	"name": "brodie robertson",
	"link": "https://www.youtube.com/c/BrodieRobertson/videos"
},
{
	"name": "luke smith",
	"link": "https://www.youtube.com/c/lukesmithxyz/videos"
},
{
	"name": "distro tube",
	"link": "https://www.youtube.com/c/DistroTube/videos"
},
{
	"name": "mental outlaw",
	"link": "https://www.youtube.com/c/MentalOutlaw/videos"
},
]



const literature = [
{
	"name": "archive",
	"link": "https://archive.org"
},
{
	"name": "the latin library",
	"link": "http://www.thelatinlibrary.com"
},
{
	"name": "project gutenberg",
	"link": "https://www.gutenberg.org"
},
]

function generateList(list, containerID, title, titleLink) {
	let cont = document.getElementById(containerID);
	let header = document.createElement('h3')
	let ul = document.createElement('ul')
	if (arguments.length == 4) {
		// if there is a fourth argument, the title should be clickable
		// and link to the url given as the fourth argument
		var titleA = document.createElement('a')
		titleA.href = titleLink;
		titleA.appendChild(document.createTextNode(title))
		titleA.setAttribute("target", "_blank")
		header.appendChild(titleA)
	}
	else {header.appendChild(document.createTextNode(title))}
	cont.appendChild(header);
	cont.appendChild(ul);
	for(var item in list) {
		var li = document.createElement('li');
		var a = document.createElement("a");
		a.href = list[item]["link"]
		a.appendChild(document.createTextNode(list[item]["name"]));
		a.setAttribute("target", "_blank")	
		li.appendChild(a);
		ul.appendChild(li);
	}
}

generateList(literature, "lit", "lit")

//below allows me to see generated html to debug
//console.log(document.getElementsByTagName('html')[0].innerHTML);
