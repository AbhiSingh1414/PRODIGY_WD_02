let [centiSeconds,seconds,hours,minutes] = [0 ,0 , 0, 0];


let displayTime = document.querySelector("#displayTime");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let timer = null;


let stopwatch = () => {
    centiSeconds++;
    if(centiSeconds===100){
        centiSeconds=0;
        seconds++;
        if(seconds===60){
            seconds=0;
            minutes++;
            if(minutes===60){
                minutes=0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0"+ hours : hours;
    let m = minutes < 10 ?"0"+ minutes : minutes;
    let s = seconds < 10 ?"0"+ seconds : seconds;
    let ms = centiSeconds < 10 ?"0"+ centiSeconds : centiSeconds;
    displayTime.innerHTML= h + ":" + m  + ":" + s + ":" + ms;
};


//Watch Start Fxn
let watchStart = () => {
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,10);
};

//Watch Stop Fxn
let watchStop = ( ) => {
    clearInterval(timer);
}

//Watch Reset Fxn
let watchReset = () => {
    clearInterval(timer);
    timer=null;
    [centiSeconds,seconds,hours,minutes] = [0 ,0 ,0 ,0];
    displayTime.innerHTML="00:00:00:00";
}

start.addEventListener("click",() => {
    watchStart();
});
stop.addEventListener("click",() => {
    watchStop();
});
reset.addEventListener("click",() =>{
    watchReset();
});