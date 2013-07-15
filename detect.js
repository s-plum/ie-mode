/*
  Internet Explorer Mode Detection
	Author: Michael "Spell" Spellacy, Director of User Interface Development for TMP.Worldwide (@spellacy)

*/

var tid = setInterval( function () {

	// Wait for DOM to be ready

	if (document.readyState !== 'complete') return; 

	clearInterval(tid);

   	// If browser is running in IE8 or compatibility mode then execute.
               
	if(document.all && !document.querySelector || document.documentMode && document.documentMode < 9) {

		var target = document.getElementsByTagName("body")[0];
		var marquee = document.createElement("marquee");
		marquee.setAttribute("id", "ie-mode-detection");
		marquee.innerHTML = "You are viewing this site in Internet Explorer 8 or Internet Explorer Compatibility Mode. You should consider <a href='http://browsehappy.com/' style='color: #fff'>upgrading your browser</a> or speaking to your IT department about not forcing this mode if possible.";
		marquee.style.cssText = "position: absolute; bottom: 0; left: 0; z-index: 10000; background: #8C001A; padding: 10px 0; color: #fff; font-family: Verdana; font-weight: normal; width: 100%; height: 20px;"
		target.appendChild(marquee);

	}

}, 100 );
