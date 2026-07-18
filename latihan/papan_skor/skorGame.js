const skorButton1 = document.querySelector("#skorButton1");
const skorButton2 = document.querySelector("#skorButton2");

const skorDisplay1 = document.querySelector('#skorDisplay1');
const skorDisplay2 = document.querySelector('#skorDisplay2');

const resetButton = document.querySelector("#Reset");
const maxSkorDisplay = document.querySelector("#maxSkorDisplay");
const congrats1 = document.querySelector("#congrats1");
const congrats2 = document.querySelector("#congrats2");
const winAudio1 = document.querySelector("#audio1");
const winAudio2 = document.querySelector("#audio2");
const clickAudio = new Audio("../button_press.mp3");
const pressAudio = document.querySelector("#pressButton");
pressAudio.preload = "auto";
pressAudio.load();
let skor1 = 0;
let skor2 = 0;
winSkor = 3;
winGame = false;

skorButton1.addEventListener('click', (e) => {
    pressAudio.currentTime = 0;
    pressAudio.play();
    if (!winGame) {
        skor1 += 1;
        if (skor1 == winSkor) {
            winGame = true;
            skorDisplay1.style.backgroundColor = "green";
            skorDisplay1.style.color = "white";
            congrats1.classList.replace("invisible", "visible");
            winAudio1.play();
        }
        skorDisplay1.textContent = skor1;

    }
});

skorButton2.addEventListener('click', () => {
    pressAudio.currentTime = 0;
    pressAudio.play();
    if (!winGame) {
        skor2 += 1;

        if (skor2 == winSkor) {
            winGame = true;
            skorDisplay2.style.backgroundColor = "green";
            skorDisplay2.style.color = "white";
            congrats2.classList.replace("invisible", "visible");
            winAudio2.play();
        }
        skorDisplay2.textContent = skor2;

    }
});

resetButton.addEventListener('click', reset);

function reset() {
    skor1 = 0;
    skor2 = 0;
    winGame = false;
    skorDisplay1.textContent = skor1;
    skorDisplay2.textContent = skor2;
    skorDisplay1.style.color = "red";
    skorDisplay2.style.color = "red";
    skorDisplay1.style.backgroundColor = "black";
    skorDisplay2.style.backgroundColor = "black";
    congrats1.classList.replace("visible", "invisible");
    congrats2.classList.replace("visible", "invisible");

    winAudio1.pause();
    winAudio1.currentTime = 0;
    winAudio2.pause();
    winAudio2.currentTime = 0;
};

maxSkorDisplay.addEventListener('change', (e) => {
    winSkor = parseInt(e.target.value);
    reset();
});