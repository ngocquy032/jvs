var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername (minLength){
    if(elUsername.value.length < minLength){
        //set message
        elMsg.innerHTML = 'Username must be'  + minLength + 'characters or more';

    }else{
        elMsg.innerHTML = "";
    }
}
if (elUsername.addEventListener){ //If event listener supported
    elUsername.addEventListener('blur', function (){ //when username loses focus
        checkUsername(5); //call checkUsername()
    }, false); // Capture during bubble phase

}else{
    elUsername.attachEvent('onblur', function (){ //IE fallback: on blur
        checkUsername(5) // call checkUsername
    });
}
