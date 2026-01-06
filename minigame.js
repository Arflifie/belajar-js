let maximum = parseInt(prompt('Masukkan nilai maksimum'));

while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimum'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guest = parseInt(prompt('Masukkan angka tebakanmu'));
let attempts = 1;

while (parseInt(guest) !== targetNum) {
    attempts++
    if (guest < targetNum) {
        guest = parseInt(prompt('Nilai tebakanmu terlalu kecil:'));
    } else if (guest > targetNum) {
        guest = parseInt(prompt('Nilai tebakanmu terlalu besar:'));
    }
}

alert(`congratulations bro, anda berhasil menebak sebanyak ${attempts} percobaan`);