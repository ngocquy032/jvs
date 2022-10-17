var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback'); //error msg element

function checkUsername(minleght){  // Declare function
    if(elUsername.value.length < minleght){
        // Set the error message

        elMsg.innerHTML = 'Username must be' + minleght + "character or more";

    }else{
        elMsg.innerHTML = '';
    }
}

elUsername.addEventListener('blur', function (){ //when it loses focus
    checkUsername(5); //Pass argument here
}, false); // regular expression -  biểu thức bất quy tắc.
