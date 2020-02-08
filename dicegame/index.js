function Newgame() {
  document.querySelector('.current-score-1').textContent = 0;
  document.querySelector('.current-score-2').textContent = 0;
  document.querySelector('.score-2').textContent = 0;
  document.querySelector('.score-1').textContent = 0;
  score1 = 0;
  score2 = 0;
  active = 1;
  document.querySelector('.btn-rd').disabled = false;
	document.querySelector('.dice').style.visibility = 'visible';
  document.querySelector('.player-1').classList.add('active');
  document.querySelector('.player-2').classList.remove('active');
}
var score1 , score2 , active ;
Newgame();
document.querySelector('.btn-rd').addEventListener('click', function() {
  var dice = Math.floor(Math.random() * 6) + 1;

  document.querySelector('.dice').src = 'img/dice-' + dice + '.png';

  document.querySelector('.current-score-' + active).textContent = dice;

  if (active == 1) {
    score1 = score1 + dice;
  } else {
    score2 = score2 + dice;
  }

  document.querySelector('.player-1').classList.toggle('active');
  document.querySelector('.player-2').classList.toggle('active');
  document.querySelector('.score-1').textContent = score1;
  document.querySelector('.score-2').textContent = score2;

  active == 1 ? active = 2 : active = 1;

  //WINNER--------------------------------------

  if (score1 >= 100) {
    document.querySelector('.playername-1').textContent = 'WINNER';
    document.querySelector('.player-1').classList.add('active');
    document.querySelector('.player-2').classList.remove('active');
    document.querySelector('.dice').style.visibility = 'hidden';
    document.querySelector('.btn-rd').disabled = 'true';

  } else if (score2 >= 100) {
    document.querySelector('.playername-2').textContent = 'WINNER';
    document.querySelector('.player-2').classList.add('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.dice').style.visibility = 'hidden';
    document.querySelector('.btn.rd').disabled = true;

  }
});
document.querySelector('.btn-ng').addEventListener('click', Newgame);
