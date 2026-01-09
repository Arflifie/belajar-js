//Foreach
// const angka = [1, 2, 3, 4, 5];

// angka.forEach(function (element) {
//     if (element % 5 === 0) {
//         console.log(element);
//     }
// });

// ===================contoh lain====================

const animes = [{
    judul: 'Naruto',
    episode: 220,
    rating: 8.5
}, {
    judul: 'One Piece',
    episode: 1000,
    rating: 9.0
}, {
    judul: 'Bleach',
    episode: 366,
    rating: 7.5
}, {
    judul: 'Dragon Ball',
    episode: 153,
    rating: 8.0
}, {
    judul: 'Attack on Titan',
    episode: 75,
    rating: 9.5
}];

animes.forEach(function (anime) {
    if (anime.episode >= 999) {
        console.log(anime.judul);
    }
});

//Map
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const angkaKaliDua = angka.map(function (num) {
    return num * 2;
})

console.log(angkaKaliDua);

const angkaGenap = angka.map(function (num) {
    if (num % 2 === 0) {
        return num;
    }
})

console.log(angkaGenap);

//Arrow Function
const pembagian = (a, b) => {
    if (a === 0 && b === 0) {
        return "maaf tidak bisa dibagi";
    }
    return a / b;
}

//implisit return
const perkalian = (a, b) => a * b; //ika function hanya 1 baris dan cenderung proses simpel

const random = (x) => (
    Math.floor(Math.random() * 50) + 1
);

//settimeout dan setinterval
setTimeout(() => {
    console.log('selamat datang di basic js');
}, 3000);

const interval = setInterval(() => {
    console.log('hello world');
}, 2000);

//untuk menghentikan interval
clearInterval(interval);

//Filter Method
//bedanya dengan map, filter mengembalikan nilai array baru berdasarkan kondisi tertentu 
//sedangkan map mengembalikan nilai array baru berdasarkan proses pada setiap elemennya
const angkaGanjil = angka.filter(n => {
    return n * 2;;
});

const angkaBaru = angka.filter(n => {
    return n < 5;
});

const animeRatingBagus = animes.filter(anime => anime.rating >= 8.0);
const judulAnimeBagus = animeRatingBagus.map((anime) => anime.judul);

//versi gabungan
// const animeRatingBagus = animes.filter(anime => anime.rating >= 8.0).map(anime => anime.judul);

//every method dan some method

//every akan mengembalikan nilai true jika semua elemen memenuhi kondisi
const examScores = [70, 85, 90, 95, 80];
const isPass = examScores.every(score => score >= 60); 
const isFail = examScores.every(score => score < 80); 

//some akan mengembalikan nilai true jika ada minimal satu elemen yang memenuhi kondisi
const hasHighScore = examScores.some(score => score >= 90);
const hasAverage = examScores.some(score => score >= 80 && score <= 90);