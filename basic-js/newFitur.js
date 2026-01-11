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