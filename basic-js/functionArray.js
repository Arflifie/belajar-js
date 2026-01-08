//Foreach
const angka = [1, 2, 3, 4, 5];

angka.forEach(function (element) {
    if (element % 5 === 0) {
        console.log(element);
    }
});

// ===================contoh lain====================

const animes = [{
    judul: 'Naruto',
    episode: 220
}, {
    judul: 'One Piece',
    episode: 1000
}, {
    judul: 'Bleach',
    episode: 366
}];

animes.forEach(function (anime) {
    if(anime.episode >= 999){
        console.log(anime.judul);
    }
});
//Map