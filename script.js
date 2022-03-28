
var searchkeys = [
	{
		"code":"-o",
		"url":"man.openbsd.org/",
		"help":"Search openBSD man pages"
	},
	{
		"code":"-y",
		"url":"www.youtube.com/results?search_query=",
		"help":"Search YouTube"
	},
	{
		"code":"-a",
		"url":"wiki.archlinux.org/?search=",
		"help":"Search the archwiki"
	},
	{
		"code":"-p",
		"url":"docs.python.org/3.9/search.html?q=",
		"help":"Search the python docs"
	},
	{
		"code":"-u",
		"url":"manpages.ubuntu.com/cgi-bin/search.py?q=",
		"help":"Search Ubuntu man pages"
	},
	{
		"code":"-f",
		"url":"freebsd.org/cgi/man.cgi?query=",
		"help":"Search FreeBSD man pages"
	},
	{
		"code":"-r",
		"url":"doc.rust-lang.org/std/index.html?search=",
		"help":"Search the Rust docs"
	},
	{
		"code":"-s",
		"url":"www.stackoverflow.com/search?q=",
		"help":"Search stackoverflow"
	},
	{
		"code":"-d",
		"url":"duckduckgo.com/?q=",
		"help":"Search DuckDuckGo"
	},
	{
		"code":"-m",
		"url":"scryfall.com/search?q=",
		"help":"Search Scryfall"
	},
	{
		"code":"-b",
		"url":"gutenberg.org/ebooks/search/?query=",
		"help":"Search Project Gutenberg"
	},
]
var social = [
	{
		name: 'reddit',
		link: 'https://reddit.com'
	},
	{
		name: 'luke smith',
		link: 'https://lukesmith.xyz'
	},
	{
		name: 'me',
		link: 'https://rf742.github.io/me'
	},
	{
		name: 'xkcd',
		link: 'https://xkcd.com'
	},
	{
		name: 'github',
		link: 'https://github.com'
	},
]

var reddit = [
	{
		name: 'computer customization',
		link: 'https://www.reddit.com/r/unixporn+startpages'
	},
	{
		name: 'photography',
		link: 'https://www.reddit.com/r/AnalogCommunity+analog+photography+cameras'
	},
	{
		name: 'shorthand',
		link: 'https://www.reddit.com/r/shorthand'
	},
]

var ltube = [
	{
		name: 'brodie robertson',
		link: 'https://www.youtube.com/c/BrodieRobertson/videos'
	},
	{
		name: 'luke smith',
		link: 'https://www.youtube.com/c/lukesmithxyz/videos'
	},
	{
		name: 'distro tube',
		link: 'https://www.youtube.com/c/DistroTube/videos'
	},
	{
		name: 'mental outlaw',
		link: 'https://www.youtube.com/c/MentalOutlaw/videos'
	},
]

const literature = [
	{
		name: 'archive',
		link: "https://archive.org"
	},
	{
		name: 'the latin library',
		link: 'http://www.thelatinlibrary.com'
	},
	{
		name: 'project gutenberg',
		link: 'https://www.gutenberg.org'
	},
]

function get_search() {
	var stringy = document.getElementById("searcher").value;
	var indicator = stringy.substr(0,stringy.indexOf(' '));
	var searchstr = stringy.substr(stringy.indexOf(' ') + 1).trimStart();
	var baseurl = 'https://';
	let correctURL = searchkeys.find(correctURL => correctURL.code === indicator);
	if (correctURL == null) {
		document.getElementById("searcher").placeholder='invalid, see help';
		helpCard.style.visibility='visible'
	}
	else{ //if good input, open new window, and set placeholder back to
		// 'search' to clear help message if previous submissions
		// brought up error messages
		let completeURL = baseurl+correctURL.url+searchstr;
		window.open(completeURL)
		document.getElementById("searcher").placeholder='search'
	}
	document.getElementById("searcher").value=''
}

function addtohelp(ulid, data){
	var basestring = ""
	data.forEach(element => basestring += '<li>' + `${element.code}: ${element.help}` + '</li>')
	document.getElementById(ulid).innerHTML = basestring
}
//}

function addtotile(ulid, data){
	var basestring = ""
	data.forEach(element => basestring +=`<li><a href="${element.link}" target="_blank">${element.name}</a></li>`)
	document.getElementById(ulid).innerHTML = basestring
}
addtotile('socially', social)
addtotile('reddit', reddit)
addtotile('ltube',ltube)
addtotile('lit', literature)
addtohelp('helpobjects', searchkeys)


