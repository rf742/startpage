
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
]

function get_search() {
	var stringy = document.getElementById("searcher").value;
	var indicator = stringy.substr(0,2);
	var searchstr = stringy.substr(2);
	var burl = 'https://';
	let correctURL = searchkeys.find(correctURL => correctURL.code === indicator);
	if (correctURL == null) {
		document.getElementById("searcher").placeholder='invalid, see help';
		helpCard.style.visibility='visible'
	}
	else{ //if good input, open new window, and set placeholder back to
		// 'search' to clear help message if previous submissions
		// brought up error messages
		let completeURL = burl+correctURL.url+searchstr;
		window.open(completeURL)
		document.getElementById("searcher").placeholder='search'
	}
	document.getElementById("searcher").value=''
}
