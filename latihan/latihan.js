const Form = document.querySelector('form');
const list = document.querySelector('#list');
const input = document.querySelector('input');
const output = document.querySelector('#output');

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const newList = document.createElement('li');
    newList.innerText = inputValue;
    list.appendChild(newList);
    input.value = '';
});

input.addEventListener('input', (e) => {
    output.innerText = input.value;
    output.value = '';
})

const skorElement = document.getElementById('skor');
const tambahButton = document.getElementById('tambahButton');
const kurangButton = document.getElementById('kurangButton');
let skor = 0;

tambahButton.addEventListener('click', (e) => {
    skor += 1;
    skorElement.textContent = skor;
});

kurangButton.addEventListener('click', (e) => {
    skor /= 2;
    skorElement.textContent = skor;
});