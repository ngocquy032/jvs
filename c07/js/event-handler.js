function checkUsername(){
    var elMsg = document.getElementById('feedback');
    if(this.value.length < 5){
        elMsg.textContent = 'Username ,ust be 5 characters or more';

    }else{
        elMsg.textContent = "";
    }
}
var elUsername =  document.getElementById('username');
elUsername.onblur = checkUsername;
//DOM Event - D..?
//Using parameter with event listener ?