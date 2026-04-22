// 1. event onclick
const button = document.querySelector("#mouse");

// style 1
button.onclick = function () {
    button.style.backgroundColor = "red";
}

// style 2
const tombol = () => {
    console.log("Tombol di klik");
}

button.onclick = tombol;

