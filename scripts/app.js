
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
            .register('./sw.js')
            .then(function() 
            { 
		    console.log('Service Worker Registered');
            });
}

	var xhr;
  	document.getElementById("btnTranslate").onclick = function(event) {
  		if (!navigator.onLine){
  			showStatus('Could not connect to internet :(')
  			return;
  		}
  		showStatus('Processing...')
  		var source = document.getElementById("tbSource").value;
  		var lang = document.getElementById("ddlLang").options[document.getElementById("ddlLang").selectedIndex].value;
  		
	 	xhr = new XMLHttpRequest();
 		var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + lang + "&dt=t&q=" + source;
 		xhr.open('GET', url, true);
 		xhr.send();
 
 		xhr.onreadystatechange = processRequest;
 	}
 
 	function processRequest(e) {
 		if (xhr.readyState == 4 && xhr.status == 200) {
 			var response = JSON.parse(xhr.responseText);
 			document.getElementById("dvTarget").innerHTML = response[0][0][0];
 			showStatus('');
 		}
 	}

function showStatus(msg){
	document.getElementById("spnStatus").innerHTML = msg;
}

