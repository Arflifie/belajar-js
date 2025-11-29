const orang = {
    umur : 19,
    alamat: 'Indonesia',
    sizebaju: ['s', 'm', 'l', 'xl', '2xl']
};

console.log(orang.umur(20));
console.log(orang.alamat = 'singapore');
console.log(orang.sizebaju[0]);

//object Bersarang (object + array)
const barang = [
    {
        id: 1,
        nama: 'Sabun'
    },
    {
        id: 2,
        nama: 'Shampo'
    },
    {
        id: 3,
        nama: 'Beras'
    },
]

const student = {
    namaDepan: 'Budi',
    namaBelakang: 'Yono',
    tallent: ['football', 'drawing'],
    exam: {
        uts: 89,
        uas: 90
    }
}

console.log(barang)