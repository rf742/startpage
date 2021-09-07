const social = [
{
	"name": "reddit",
	"link": "https://reddit.com"
},
{
	"name": "LukeSmith",
	"link": "https://www.youtube.com/channel/UC2eYFnH61tmytImy1mTYvhA"
},
{
	"name": "me",
	"link": "https://rf742.github.io/me"
},
{
	"name": "xkcd",
	"link": "https://xkcd.com"
},
{
	"name": "github",
	"link": "https://github.com"
},

]


function generateList(list, containerID) {
	let cont = document.getElementById(containerID);
	for(var item in list) {
		var li = document.createElement('li');
		var a = document.createElement("a");
		a.href = list[item]["link"]
		a.appendChild(document.createTextNode(list[item]["name"]));
		a.setAttribute("target", "_blank")	
		console.log("a: " + a)
		li.appendChild(a);
		cont.appendChild(li);
	}
}

generateList(social, "social-list-container")
