// Common JavaScript Functions
//
// Script created by Eric
// Copyright (c) 2001

/////////////////////
//Do not hyperlink
function dontLink() {
	return false;
}

// On Window Load
function addLoadEvent(func) {  
    var oldonload = window.onload;  
    if (typeof window.onload != 'function') {  
        window.onload = func;  
    } else {  
        window.onload = function() {  
            if (oldonload) {  
            oldonload();  
            }  
            func();  
        }
    }
}  

addLoadEvent(function() {
    if (document.getElementById("copyrightYear")) {
        document.getElementById("copyrightYear").innerHTML = new Date().getFullYear();
    }
});
