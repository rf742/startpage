const LIST_ITEMS = [
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


function test(l) {
	let cont = document.getElementById("listcontainer");
	for(var item in l) {
		var li = document.createElement('li');
		var a = document.createElement("a");
		a.href = LIST_ITEMS[item]["link"]
		a.appendChild(document.createTextNode(LIST_ITEMS[item]["name"]));
		a.setAttribute("target", "_blank")	
		console.log("a: " + a)
		li.appendChild(a);
		cont.appendChild(li);
		console.log("it ran")
	}
}
test(LIST_ITEMS)
