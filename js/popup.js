// Detect if the User Agent is capable of interpreting DHTML...if not, redirect the user to the appropriate page
if(!(document.getElementById || document.all || document.layers)){

	location.href='update_browser.asp';
}

// Function displayStatus is designed to manipulate the window's status bar text
function displayStatus(strStatusText){
	
	if(strStatusText == 0){
		window.status = '';
	}
	else{
		window.status = strStatusText;
	}
	
	return true;
}

// Function popUp is designed to open a window of specified size
function popUp(strPage, strName, intWidth, intHeight, strScroll, strResize){ 

	// Detect the browser type
	var isIE = !!window.MSInputMethodContext && !!document.documentMode;
	
	if(isIE){
		var intLeft, intTop;
		intLeft = Math.round(screen.width / 2) - 50;
		intTop = Math.round(screen.height / 2) - 50;
		// Resizing Variables
		var intCurrentHeight = 100, intCurrentWidth = 100;

		var w = window.open(strPage, strName, 'width=100,height=100,scrollbars=' + strScroll + ',left=' + intLeft + ',top=' + intTop + ',resizable=' + strResize);

		while (intCurrentHeight<intHeight || intCurrentWidth<intWidth){
			// See if we need to increase our Height
			if (intCurrentHeight<intHeight) {
				// Increase our Height
				intCurrentHeight += 4;
				// Decrease our Top Position
				intTop -= 2;
				if (intTop < 0)
					intTop = 0;
			}
			// See if we need to increase our Width
			if (intCurrentWidth<intWidth) {
				// Increase our Width
				intCurrentWidth += 4;
				// Decrease our Left Position
				intLeft -= 2;
				if (intLeft < 0)
					intLeft = 0;
			}
			// Resize our Form
			w.resizeTo(intCurrentWidth,intCurrentHeight);
			// And Move our Form to center it
			w.moveTo(intLeft,intTop);
		}
	}
	else{
		// This is not IE so just pop open the window
		var w = window.open(strPage, strName, 'width=' + intWidth + ',height=' + intHeight + ',scrollbars=' + strScroll + ',screenX=200,screenY=200');
	}

	return true;
}