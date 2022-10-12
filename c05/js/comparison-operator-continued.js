var score1 = 90;
var score2 = 95;
var highScore1 = 75;
var highscore2 = 95;

var comparison = (score1 + score2) > (highScore1 + highscore2);

var el=document.getElementById('answer');

el.textContent = 'New high score' + comparison;