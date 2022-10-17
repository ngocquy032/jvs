function checkLength(e, minlength){
    var el, elMsg;
    if(!e){ // if event object doesn't exist
        e = window.event;  //Use IE fallback
    }
    el = e.target || e.srcElement; // Get target of event
    elMsg = el.nextSibling; //get its next sibling

    if(el.value.length < minlength){ // If length is too short set msg
        elMsg.innerHTML = 'username must be' + minlength + 'characters or more';
    }else{ // Otherwise
        elMsg.innerHTML = ''; //clear message
    }

}

var elUsername = document.getElementById('username');
if(elUsername.addEventListener){ //If event listener supported
    elUsername.addEventListener('blur', function (e){ // on blur event
        // Note: This function is checkLength() - not checkUsername()
        checkLength(e,5); // call checkLength()
    }, false); // capture in bubble phase
}else{ // Otherwise
    elUsername.attachEvent('onblur', function (e){ // IE fallback onblur
        // NOTE: This function is checkLength() - not checkUsername()
        checkLength(e,5); // call checkLengt()
    });
}