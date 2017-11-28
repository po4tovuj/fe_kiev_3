'use strict';
const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
let spase = keys.push(' ');
console.log(keys);
// window.onclick = function(event){
//     event.preventDefault();
// }
window.onkeydown = function (event) {
    let array = document.querySelectorAll('button');
    event.preventDefault();
    for (let i = 0; i < array.length; i++) {
        if ((keys[i]) === event.key) {
            array[i].classList.add('keyboard__btn--active');
            console.log(array[i]);
            let btnAudio = array[i].getAttribute('data-note');
            console.log(btnAudio);
            let sound = document.getElementById('slideThree');

            if (sound.checked) {
                playSound(btnAudio);

            }
        }
    }
}

window.onkeyup = function (event) {
    let arrayTwo = document.querySelectorAll('button');
    for (let a = 0; a < arrayTwo.length; a++) {
        arrayTwo[a].classList.remove('keyboard__btn--active');
    }
}
