var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System maintenance</h2>';
msg += 'Our sservers are being updated between 3 and 4 a.m ';
msg += 'during this time, there may be minor minor disruptions to service.</div>';

var elNote = document.createElement('div');
elNote.setAttribute('id','note');
document.body.appendChild(elNote);

function dismissNote() {
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);