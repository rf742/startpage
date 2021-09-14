function get_search() {
	var stringy = document.getElementById("searcher").value;
	var code = stringy.substr(0,2);
	var searchstr = stringy.substr(2);
	var burl = 'https://';
	var success = 1//is changed to zero in switch if no valid code found
	switch (code) {
		case '-o':
			burl += 'man.openbsd.org/';
			break;
		case '-y':
			console.log('found -y!');
			burl += 'www.youtube.com/results?search_query=';
			break;
		case '-a':
			burl += 'wiki.archlinux.org/?search=';
			break;
		case '-p':
			burl += 'docs.python.org/3.9/search.html?q=';
			break;
		case '-u':
			burl += 'manpages.ubuntu.com/cgi-bin/search.py?q='
			break;
		case '-r':
			burl += 'doc.rust-lang.org/std/index.html?search='
			break;
		case '-s':
			burl += 'www.stackoverflow.com/search?q='
			break;
		case '-d':
			burl += 'duckduckgo.com/?q='
			break;
		case '-m':
			burl += 'scryfall.com/search?q='
			break;
		default: 
			success = 0 //0 code tells me no match;		
	}
	if (success == 1) {
		burl += searchstr;
		window.open(burl)
	}
	
}
