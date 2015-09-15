/* Regex pattern to check URLs against.
   It matches URLs like: http[s]://[...]test.com[...] */

var urlRegex = /^https?:\/\/(?:[^\.]+\.)?google\.com/dfa/;

/* A function creator for callbacks */
function doStuffWithDOM(domContent){
	console.log("I got the following DOM content:\n" + domContent);
}

/*When the browser-action button is clicked..*/
chrome.browserAction.onClicked.addListener(function(tab) {
	/*...check the URL of the actie tab against our pattern and...*/
	if(urlRegex.test(tab.url)) {
		/*...if it matches, send a message specifying a callback too */
		chrome.tabs.sendMessage(tab.id, { text: "report_back" },
					doStuffWithDOM());
	}
});
