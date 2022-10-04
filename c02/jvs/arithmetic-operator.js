var subtotal = (13+1)*5;
var shipping = 0.5*(13+1);

var shippping = subtotal+shipping;

var elSub = document.getElementById( 'subtotal');
elSub.textContent=subtotal;

var elShip= document.getElementById( 'shipping');
elShip.textContent= shippping;

var elTotal= document.getElementById( 'total');
elTotal.textContent= total;