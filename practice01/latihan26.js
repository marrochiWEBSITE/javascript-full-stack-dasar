// TYPE OF



function jenisTypeOf(nama){
    return typeof nama;
}

function jenisTipe(nama){
    if(typeof nama === 'string'){
            nama = 'berhasil diproses';
    }else{
            nama = 'number tidak bisa digunakan';
    }
    return nama;
}

console.log(jenisTypeOf('aku dan kamu'));
console.log(jenisTypeOf(09090));
console.log(jenisTypeOf(null));
console.log(jenisTypeOf(['ikan', 'ayam']));
console.log(jenisTipe('number'));
console.log(jenisTipe(3209239032));


