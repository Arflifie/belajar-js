let maximum = parseInt(prompt('Masukkan nilai maksimum'));

while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimum'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guest = parseInt(prompt('Masukkan angka tebakanmu'));

while (guest !== targetNum) {
    if (guest < targetNum) {
        guest = parseInt(prompt('Nilai tebakanmu terlalu kecil:'));
    } else if (guest > targetNum) {
        guest = parseInt(prompt('Nilai tebakanmu terlalu besar:'));
    }
}

alert('congratulations bro');