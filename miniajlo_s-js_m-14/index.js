let markUp = `<form> </form><button type="button" id="start">Start</button> </br> </br>
<button type="button" id="stop">Stop</button> </form>`;
document.body.innerHTML = markUp;
let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");
function Timer () {
    this.startTimer = '';
    this.stopTimer = '';
    this.interval = '';
}


Timer.prototype.start = function () {
    let startDate = new Date();
    timerResults.startTimer = startDate.getTime();
    console.log(timerResults.startTimer);
};

Timer.prototype.stop = function (){
    let stopDate = new Date();
    timerResults.stopTimer = stopDate.getTime();
    console.log(timerResults.stopTimer);
    timerResults.interval = Math.round((timerResults.stopTimer - timerResults.startTimer)/1000);
    console.log(`The interval is ${timerResults.interval} seconds`);
};

let timerResults = new Timer();

btnStart.addEventListener('click', timerResults.start);
btnStop.addEventListener('click', timerResults.stop);