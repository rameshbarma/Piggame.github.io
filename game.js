var scores, roundedScore, playerActive;

scores = [0,0];
roundedScore =0;
playerActive =0;



//document.querySelector('#current-' +playerActive).textContent = 'dice';


document.querySelector('.dice').style.display ='none';

document.querySelector('.btn-roll').addEventListener('click', function() {
var dice =Math.floor(Math.random() * 6) + 1;

console.log(dice);
var disDom =  document.querySelector('.dice');
disDom.style.display = 'block';
disDom.src = 'dice-' + dice + '.png';

if(dice !== 1){
    roundedScore += dice;
    document.querySelector('#current-' + playerActive).textContent = roundedScore;
}
else{
    nextPlaer();
}

});


document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[playerActive] += roundedScore;

    document.querySelector('#score-' + playerActive).textContent = scores[playerActive];

    if(scores[playerActive] >= 30){
 document.querySelector('#name-'+playerActive).textContent = 'Winner :)';
 document.querySelector('.dice').style.display ='none';
 document.querySelector('.player-'+playerActive).classList.add('Winner');
 document.querySelector('.player-'+playerActive).classList.remove('active');
    }

    nextPlaer();
    
});

function nextPlaer(){

playerActive === 0 ? playerActive = 1 : playerActive = 0 ;
roundedScore =0;
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.player-0').classList.toggle('active');
document.querySelector('.player-1').classList.toggle('active');
document.querySelector('.dice').style.display ='none';

}