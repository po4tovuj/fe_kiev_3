let markUp = `<form> </form><button type="button" id="start">Start</button> </br> </br>
<button type="button" id="stop">Stop</button> </form>`;
document.body.innerHTML = markUp;
let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");
function Timer () {
    this.startTime = 0,
    this.stopTime = 0,
    this.interval = 0
}


Timer.prototype.start = function () {
    let startDate = new Date();
    this.startTime = startDate.getTime();
    console.log(this.startTime);
};

Timer.prototype.stop = function (){
    let stopDate = new Date();
    this.stopTime = stopDate.getTime();
    console.log(this.stopTime);
    this.interval = Math.round((this.stopTime - this.startTime)/1000);
    console.log(`The interval is ${this.interval} seconds`);
};

let timerResults = new Timer();

btnStart.addEventListener('click', timerResults.start.bind(timerResults));
btnStop.addEventListener('click', timerResults.stop.bind(timerResults));