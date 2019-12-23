// BERKENALAN DENGAN FUNCTION
// FUNCTION BISA DILAKUKAN BERULANG KALI DENGAN KEBUTUHAN YANG SAMA

// single
function name(namakamu){
    console.log('hai !!   '+namakamu);
}

name("oci");
name("jesika");
name('andre');

// double
function person(nama, umur){
    console.log('hai ! '+nama+' umur kamu '+ umur + ' sangat muda' );
}

person("oci",20);

// return mengembalikan nilai
function nilaiBalik(nilaiA,nilaiB){
    return nilaiA + nilaiB;
}

// mengembalikan nilai
let nilaiReturn = nilaiBalik(9,1);
console.log(nilaiReturn);


// bisa jugha langsung panggil
console.log(nilaiBalik(5,10));