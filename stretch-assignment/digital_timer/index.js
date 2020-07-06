// document.getElementById("secondTens").innerHTML = 0;
// document.getElementById("secondOnes").innerHTML = 0;
// document.getElementById("msHundreds").innerHTML = 0;
// document.getElementById("msTens").innerHTML = 0;


const startSecond = 0;
let time = startSecond * 1000;

// const countdownEl = document.getElementById("secondTens", "secondOnes", "msHundreds", "msTens");
const countdownEl = document.getElementsByClassName("digit");

function updateEl() {
    const seconds = math.floor(time / 1000);
    let milliSec = time % 1000;
    coundownEl.innerHTML = `${seconds}: ${milliSec}`;
    time++;

}
setInterval(updateEl, 10);