
let countInterval = `<form>
<button type="button" id="start">Start</button> </br></br>
<button type="button" id="stop">Stop</button>
</form>`
let nyTimer = `<p class="ny-count"></p>`;
let markUp = `<div>
    ${countInterval}
    ${nyTimer}
</div>`;
document.body.innerHTML = markUp;
let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");

class Timer {
    constructor (starTimer, stopTimer){
        this.startTimer = starTimer;
        this.stopTimer = stopTimer;
        this.interval = stopTimer - starTimer;
        
    }
    start () {
        let startDate = new Date();
        this.startTimer = startDate.getTime();
    }
    stop (){
        let stopDate = new Date();
        this.stopTimer = stopDate.getTime();
        this.interval = Math.round((this.stopTimer - this.startTimer)/1000);
        // console.log(`The interval is ${stopWatch.interval} seconds`);
    }
    getTime(){
        console.log(`The interval class "Timer" is ${stopWatch.interval} seconds`);
    }
    static timeToNY(){
        let timeEnd = new Date();
        timeEnd = new Date(timeEnd.getYear() > 1900 ? (timeEnd.getYear() + 1) : (timeEnd.getYear() + 1901), 0, 1);
        let today = new Date();
        today = Math.floor((timeEnd - today)/1000);
        let tsec = today % 60; today = Math.floor(today / 60); if (tsec < 10) tsec = '0' + tsec;
        let tmin = today % 60; today = Math.floor(today / 60); if (tmin < 10) tmin = '0' + tmin;

        let thour = today % 24; today = Math.floor(today / 24);

        let day = checkEndings(today, ['День', 'Дня', 'Дней']);
        let hour = checkEndings(thour, ['Час', 'Часа', 'Часов']);
        let minute = checkEndings(tmin, ['Минута', 'Минуты', 'Минут']);
        let second = checkEndings(tsec, ['Секунда', 'Секунды', 'Секунд']);
        
        let timestr = `${today} ${day}, ${thour} ${hour}, ${tmin} ${minute}, ${tsec} ${second}`;

        document.querySelector('.ny-count').textContent = `До Нового Года осталось: ${timestr}`;
    }
}
let stopWatch = new Timer();
function renderEndings (n, e){
   checkEndings(n, e);
   
}
function checkEndings (num, end){
    let sEnding, i;
    num = num % 100;
    if (num >= 11 && num <= 19) {
        sEnding = end[2];
    } else {
        i = num % 10;
        switch (i) {
            case (1): sEnding = end[0]; break;
            case (2):
            case (3):
            case (4): sEnding = end[1]; break;
            default: sEnding = end[2];
        }
    }
    return sEnding;
}

let example = new Timer(50, 130);
console.log('interval in first example = ' + example.interval + ' seconds');

btnStart.addEventListener('click', stopWatch.start.bind(stopWatch));
btnStop.addEventListener('click', function () { stopWatch.stop(); stopWatch.getTime()});
window.setInterval("Timer.timeToNY()", 1000);
