// 1. event onclick
const button = document.querySelector("#mouse");

// style 1
// button.onclick = function () {
//     button.style.backgroundColor = "red";
// }

// style 2
// const tombol = () => {
//     console.log("Tombol di klik");
// }

// button.onclick = tombol;

// 2. event addEventListener
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
   const newColor = changeColor();
   document.body.style.backgroundColor = newColor;
   h1.innerText = newColor;
   console.log(newColor);
});

const changeColor = ()=> {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}