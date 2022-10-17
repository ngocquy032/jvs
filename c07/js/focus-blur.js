function checkUsername(){
    var username = el.value;
    if(username.length < 5){
        elMsg.className = 'warning';
        elMsg.textContent = "not long enough, yet....";
    } else{
        elMsg.textContent = '';
    }
}

function  tipUsername(){ // Declare function
    elMsg.className = 'tip'; // change class for message
    elMsg.innerHTML = 'Username must be at least 5 characters'; // add message
}

var el = document.getElementById('username'); // Username input
var elMsg = document.getElementById('feedback'); // Element to hold message

// When the username input gains / loses focus call functions above:

el.addEventListener("focus", tipUsername, false); //focus call tipUsername
el.addEventListener('blur', checkUsername, false); // blur call checkUsername