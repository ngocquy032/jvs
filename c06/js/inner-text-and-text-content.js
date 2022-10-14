var firstIrem = document.getElementById('one');
var showTextContent = firstItem.innerText;

var msg = '<p>textContent: ' + showTextContent + '<p/>';
    msg += '<p>innerText: ' + showInnerText + '</p>';

var el =  document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'ssourdough bread';
