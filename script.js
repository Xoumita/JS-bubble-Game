// BUbbles making
function makeBubble(){
var clutter = "";

for(var i=1; i<=133; i++){
    var num = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${num}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
// timer
var timer = 10;
function runTimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            // console.log(timer);
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval()
            document.querySelector("#pbtm").innerHTML = `<div id="yourScore">
            <h3>Game Over</h3>
            <h1>Your Score: ${score} </h1>
            <button onClick="window.location.reload();">Play Agin</button>
        </div>`;
        }
        
    }, 1000);
}
// New Hit
var hit = 0;
function newHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#newHit").textContent = hit;
}
//Score
var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
// event bubbling
document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hit){
        increaseScore();
        makeBubble();
        newHit();
    }
})



newHit();
runTimer();
makeBubble();