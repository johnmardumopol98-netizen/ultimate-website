// CLOCK
function updateClock(){
    let clock = document.getElementById("clock");
    if(clock){
        let now = new Date();
        clock.innerHTML = now.toLocaleTimeString();
    }
}
setInterval(updateClock,1000);

// CALCULATOR
function calculate(){
    let input = document.getElementById("calcInput").value;
    try{
        document.getElementById("calcResult").innerHTML = eval(input);
    }catch{
        document.getElementById("calcResult").innerHTML = "Error";
    }
}
function clearCalc(){
    document.getElementById("calcInput").value="";
    document.getElementById("calcResult").innerHTML="";
}

// TIMER
function startTimer(){
    let time = document.getElementById("timerInput").value;
    let display = document.getElementById("timerDisplay");

    let countdown = setInterval(()=>{
        if(time<=0){
            clearInterval(countdown);
            display.innerHTML="Time's Up!";
        }else{
            display.innerHTML=time+" seconds left";
            time--;
        }
    },1000);
}
