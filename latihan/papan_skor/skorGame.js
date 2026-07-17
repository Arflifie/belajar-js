const skorButton1 = document.querySelector("#skorButton1");
const skorButton2 = document.querySelector("#skorButton2");

const skorDisplay1 = document.querySelector('#skorDisplay1');
const skorDisplay2 = document.querySelector('#skorDisplay2');

const resetButton = document.querySelector("#Reset");
const maxSkorDisplay = document.querySelector("#maxSkorDisplay");

let skor1 = 0;
let skor2 = 0;
winSkor = 3;
winGame = false;

skorButton1.addEventListener('click', () => {
    if (!winGame) {
        skor1 += 1;
        if (skor1 == winSkor) {
            winGame = true;
            skorDisplay1.style.backgroundColor = "green";
            skorDisplay1.style.color = "white";
        }
        skorDisplay1.textContent = skor1;
    }
});

skorButton2.addEventListener('click', () => {
    if (!winGame) {
        skor2 += 1;
        if (skor2 == winSkor) {
            winGame = true;
            skorDisplay2.style.backgroundColor = "green";
            skorDisplay2.style.color = "white";
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
    skorDisplay1.style.color = "black";
    skorDisplay2.style.color = "black";
    skorDisplay1.style.backgroundColor = "white";
    skorDisplay2.style.backgroundColor = "white";
};

maxSkorDisplay.addEventListener('change', (e) => {
    winSkor = parseInt(e.target.value);
    reset();
});