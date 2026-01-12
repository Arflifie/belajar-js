//1. Default Value Function Parameter
function lemparDadu(sisi = 6) {
    return Math.floor(Math.random() * sisi) + 1;
}
console.log(lemparDadu());

Sapa = (nama = 'Nama User', aktivitas = 'Kegiatannya Apa?') => {
    console.log(`${nama} sedang ${aktivitas}` )
}
Sapa();
//default value akan digunakan jika tidak ada argumen yang diberikan saat pemanggilan fungsi, atau jika argumen tersebut bernilai undefined
//dan perhatikan juga urutan parameter, yang memiliki default value harus diletakkan di urutan terakhir agar tidak terjadi kesalahan saat pemanggilan fungsi

//2. Mengubah Array/Object ke Deret Value Argumen Function dengan Spread Operator
const angka = [3, 5, 1, 8, 2];
const maxAngka = Math.max(...angka);
console.log(maxAngka);
//spread operator (...) akan mengubah array menjadi deret value yang dipisahkan dengan koma
//caranya cukup letakkan ... sebelum nama array saat memanggil fungsi

const siswa = {
    nama: 'Budi',
    umur: 20,
    jurusan: 'Teknik Informatika'
}; 

function perkenalan(nama, umur, jurusan) {
    console.log(`Halo, nama saya ${nama}, umur saya ${umur} tahun, saya dari jurusan ${jurusan}`);
}
perkenalan(...Object.values(siswa));
//Object.values() akan mengembalikan array yang berisi value dari setiap properti dalam object
//kemudian array tersebut diubah menjadi deret value dengan spread operator saat memanggil fungsi

//3. Menggabungkan Array dengan Array Lain menggunakan Spread Operator
const angka2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nama = ['Arfun', 'Budi', 'Citra'];

const gabungan = [...angka2, 'gabung dengan',...nama]; //urutan berpengaruh pada hasil akhir
console.log(gabungan);

//4. Menggabungkan Object dengan Object Lain menggunakan Spread Operator
const siswa1 = {
    nama: 'Dewi',
    umur: 21
};
const jurusan = {
    jurusan: 'Sistem Informasi',
    universitas: 'Universitas Indonesia'
};

const dataSiswa = {...siswa1, ...jurusan};
console.log(dataSiswa);
//jika ada properti yang sama pada kedua object, maka properti dari object kedua akan menimpa properti dari object pertama

//5. Rest Parameter
const namaSiswa = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

const pemenang = (satu, dua, tiga, ...sisa) => {
    console.log(`Juara 1 adalah ${satu}`)
    console.log(`Juara 2 adalah ${dua}`)
    console.log(`Juara 3 adalah ${tiga}`)
    console.log(`Peserta lain: ${sisa}`)
}

pemenang(...namaSiswa);
//rest parameter (...) akan mengumpulkan sisa argumen menjadi sebuah array
//rest parameter harus diletakkan di urutan terakhir pada daftar parameter fungsi

//6. Destructuring Function Parameter
const [gold, silver, bronze, ...pesertaLain] = namaSiswa;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(pesertaLain);
//dengan destructuring, kita bisa langsung mengambil nilai dari array atau object saat mendefinisikan parameter fungsi  

//7. Destructuring Object Function Parameter
const dataMahasiswa = {
    name: 'Fajar',
    age: 22,
    major: 'Teknik Elektro'
};

const {name: namaSaya, age, major, fakultas = 'Belum diInputkan'} = dataMahasiswa;
console.log(namaSaya);
console.log(age);
console.log(major);
console.log(fakultas);
//kita bisa memberikan nama baru pada variabel hasil destructuring dengan sintaks name: namaBaru
//kita juga bisa memberikan default value pada properti yang mungkin tidak ada dalam object

//8. Destructuring Function Parameter dalam Fungsi
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

const anime = animes.map(({judul, episode, rating}) => {
    return `${judul} dengan total episode ${episode} memiliki rating ${rating}`;
});

console.log(anime);
//dalam parameter fungsi, kita bisa langsung melakukan destructuring pada object yang diterima sebagai argumen
//sehingga kita bisa langsung mengakses properti-properti dari object tersebut tanpa harus menulis nama objectnya lagi