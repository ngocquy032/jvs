var originalNumbber = 10.23456;

var msg = '<h2>original number</h2><p>' + originalNumbber +'</p>';

msg += '<h2>3 decimal places</h2><p>'+ originalNumbber.toFixed(3) +'</p>';

msg += '<h2>3 digits</h2><p>'+ originalNumbber.toPrecision( 3) + '</p>';

var el = document.getElementById('info');

el.innerHTML = msg;