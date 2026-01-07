
// let nama = "arfun";

// for(let i = 0; i <= 3; i++){
//     console.log(`${i + 1}. nama saya adalah :`);
//     for(let j = 0; j < nama.length; j++){
//         console.log(`    ${nama}`);
//     }
// }

//==FOR==
// const student = [
//     ['robi', 'lani', 'budi'],
//     ['yaya', 'yudo', 'tega'],
//     ['joko', 'dana', 'gina']
// ];

// for(let i=0; i < student.length; i++){
//     const baris = student[i];
//     console.log(`baris ke-${i+1}`);
//     for(let j = 0; j < baris.length; j++){
//         console.log(baris[j]);
//     }
// }

//==WHILE==
// let num = 0;
// while(num < 10){
//     console.log(num);
//     num++;
// }

// const password ='admin123';

// let guest = prompt('masukkan password');

// while(guest.length !== 8){
//     alert('password salah inputkan ulang');
//     guest = prompt('masukkan password');
// }
// alert('password benar');

//==BREAK==
// let input = prompt('ketikkan sesuatu');

// while(true){
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop') break;
// }

// alert('oke deh');

// for(let i = 0; i <= 100; i++){
//     if(i === 100) break;
//     console.log(i);
// }

//==FOR OF==
// let namaBuah = ['pisang', 'durian', 'nanas', 'nangka'];

// for (let buah of namaBuah ){
//     console.log(`ini adalah buah ${buah}`);
// }

// const listStudent = [
//     ['robi', 'lani', 'budi'],
//     ['yaya', 'yudo', 'tega'],
//     ['joko', 'dana', 'gina']
// ];

// for (let row of listStudent){
//     for (let student of row){
//         console.log(`${listStudent} adalah siswa bernama :  ${student}`);
//     }
// }


//==FOR IN==
// let nilaiSiswa = {
//     Lani : 19,
//     Doni : 25,
//     Toni : 30,
//     Sigit : 12
// };

// for (let siswa in nilaiSiswa){
//     console.log(`${siswa} memiliki nilai ${nilaiSiswa[siswa]}`);
// }





// const tinggi = 5;
// let a = '';

// for(let i = 1; i <= tinggi; i++){
//     console.log(a +='*');
// }

// for(let j = tinggi-1; j >= 1; j--){
//     a = a.slice(0, -1);
//     console.log(a);
// }