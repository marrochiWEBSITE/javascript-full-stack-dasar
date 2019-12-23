// BERKENALAN DENGAN ARRAY

const anime = ['naruto','sasuke','kakashi'];
anime[0]; //output naruto
anime[1]; //output sasuke
anime[2]; //output kakashi

//menampilkan semua 
console.log(anime);

//menampilkan salah satu
console.log(anime[0]);

// merubah nilai yg awalnya naruto menjadi uzumaki naruto
anime[0] = 'uzumaki naruto';
console.log(anime[0]);

//menambah array
anime[3] = 20;
// anime[4] = 'kita kosongkan'
anime[5] = 100;
// menampilkan semua
console.log(anime);

// untuk menghitung array
// leng membaca array dari satu sedangkan index 0
let lengOfAnime = anime.length;

// tampilkan
console.log(lengOfAnime);



// bagaimana cara mengambil kakashi dan yg lainya
let kakashi = anime[anime.length - 4];
let sasuke  = anime[anime.length - 5];
let naruto = anime[anime.length - 6];

console.log(kakashi,sasuke,naruto);

