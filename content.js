/*Listen for messages*/

var name = document.getElementById('span');
console.log(name);

/*
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	if (msg.text && (msg.text == "report_back")) {
		//Call the specified callback, passing
		the web-pages DOM content as an argument
		sendResponse(document.all[0].outerHTML);
	}
});
*/
