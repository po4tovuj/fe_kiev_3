let timer = {
    id: null,
    startTimer: null,
    stopTimer: null,
    isActive: false,
    date: Date.now(),
    mistakes: 0,
    start() {
        this.isActive = true;
        this.startTime = Date.now();
        let minutes = 0;
        this.id = setInterval(() => {

            if (this.totalTime > 58) {
                minutes++;
                this.startTime = Date.now();
            }
            this.totalTime = (Date.now() - this.startTime) / 1000;
            my_timer.textContent = `${minutes} min ${this.totalTime} sec`;
        }, 100);
    },
    stop() {
        this.isActive = false;
        clearInterval(this.id);
    }
};

const string = 'qryte';
const charsArr = string.split("").reverse();

const renderString = str => {
    htmlStr = '';

    str.forEach(element => {
        htmlStr += `<div class="keyboard__btn">${element}</div>`;
    });

    document.querySelector('.container').innerHTML = htmlStr;
};
//Render key for training

let errors = 0;

//start traine
// let array = document.querySelectorAll('.keyboard__btn');
const onKeyPress = (event) => {
    if (!timer.isActive) {
        timer.start();
    }
    if (charsArr.includes(event.key)) { //check for pressed key in charsArr
        let find = charsArr.indexOf(event.key);
        console.log(find);
        charsArr.splice(find, 1); //delete pressed key
        renderString(charsArr);
        console.log("You are good!");
    } else {
        errors++; //add mistakes
        console.log('You made a mistake');
    }
    if (charsArr.length === 0) { //stop traine
        timer.stop();
        console.log(timer.totalTime); //write or rewrite localStorage
        document.querySelector('.container').innerHTML = `<div> <p></p>Your attempt is over </p>
<p> You made ${errors} mistakes</p> </div>`;
        let resultNew = ` Your best result is: ${timer.totalTime} seconds,
with ${errors} mistakes`;
        let result = localStorage.getItem('result');
        if (localStorage.getItem('result') === null) {
            localStorage.setItem('result', resultNew);
        } else if (result > resultNew) {
            localStorage.setItem('result', resultNew);
        }

        console.log(`Your result is: ${timer.totalTime} seconds, 
You made ${errors} mistakes`);
    }
    console.log("mistakes: " + errors);
};

window.addEventListener("keypress", onKeyPress);
renderString(charsArr);
//My best result 0.10 seconds (^_^)