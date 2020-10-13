var player = document.getElementById('player');
var Timer = document.getElementById('Timer');
var Score = document.getElementById('Score');
var RealScore = 0;
var RealTimer = 20;
var IntervalCounter = 800;

var interval = setInterval(StartTimer, IntervalCounter);


player.addEventListener('click', function() {
    RealScore++;
    Score.textContent = 'Score' + ' ' + RealScore;
    var RandomPosX = Math.floor(Math.random() * 500);
    var RandomPosY = Math.floor(Math.random() * 600);
    var RandomScale = Math.floor(Math.random() * 100);

    if (RandomScale < 10) {
        RandomScale = 20;
        player.style.width = RandomScale + 'px';
        player.style.height = RandomScale + 'px';

    }

    player.style.marginLeft = RandomPosX + 'px';
    player.style.marginTop = RandomPosY + 'px';
    player.style.width = RandomScale + 'px';
    player.style.height = RandomScale + 'px';
})

function StartTimer() {
    RealTimer--;
    Timer.textContent = 'timer' + ' ' + RealTimer;

    if (RealTimer < 1) {
        EndGame();
    }
}
function StopTimer() {

}
function EndGame() {
    alert('Oops time out, you lose' + ' ' + 'your Score is' +   RealScore );
    clearInterval(interval);
}