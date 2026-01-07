// function lemparDadu(){
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// function nyanyi(){
//     console.log("cek..");
//     concole.log('do re mi fa so la...');
// }

//return
// function jumlahkan(a, b){
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return 'Input harus angka';
//     }   
//     return a + b;
// }

// scope
// let linux = "Pop Os!";

// function tampilkanOS(){
//     // let linux = "Ubuntu";
//     console.log(linux);
// }

// tampilkanOS();


//blocked scope
//let dan const punya scopenya tersendiri di dalam blok {}
// var tidak punya blocked scope


//expression function
// const hasilPerkalian = function(nilai1, nilai2){
//     return nilai1 * nilai2;
// };

// hasilPerkalian(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);


//function sebagai argumen function lain
// function duaKali(func){
//     func();
//     func();
// }

// function lemparDadu(){
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }
// duaKali(lemparDadu);


//function bernilai balik function

// function keputusan() {
//     const rand = Math.floor(Math.random() * 10) + 1 ;
//     if (rand > 5) {
//         return function () {
//             console.log(`angka lebih besar dari 3, yaitu ${rand}`);
//         };
//     } else {
//         return function () {
//             console.log(`angka lebih kecil dari 3, yaitu ${rand}`);
//         };
//     }
// }

// let hasil = keputusan();

//function method
// const Time = {
//     sekarang:  function(){
//         const sekarang = new Date();
//         console.log(sekarang.toLocaleTimeString('en-US'));
//     },
//     masaDepan: function(angka){
//         const sekarang = new Date();
//         sekarang.setHours(sekarang.getHours() + angka);
//         console.log(sekarang.toLocaleTimeString('en-US'));
//     }
// }

// Time.sekarang();
// Time.masaDepan(5);

//this keyword
// const orang = {
//     nama: 'Arfun',
//     umur: new Date().getFullYear() - 2005,
//     sapa: function(){
//         console.log(`halo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//     }
// }
// orang.sapa();

//try and catch
// const nama = 'Arfun';

// try {
//     console.log(nama);
// } catch (error) {
//     console.log('Nama Tidak Ada');
// }
//try and catch tidak akan menghentikan eksekusi program


