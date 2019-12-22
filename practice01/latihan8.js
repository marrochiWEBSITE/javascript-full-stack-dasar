// BELAJAR OBJECT
const person = {
        nama : 'marrochi',
        age : 21,
        tinggi : 170,
        lebar : 50
};

// semua ditampilkan
console.log(person);

// menampilkan salah satu
console.log(person.nama);
console.log(person['tinggi']);

// merubah nilai properti object 
person.nama = 'ochi eaaa';
console.log(person);

// walaupun const tidak bisa diubah tapi disini bukan mengubah nilainya tapi properti nilainya;
// contoh conts merubah nilainya dan eror
// const person = {
//     nama : 'marrochi thea'
// };