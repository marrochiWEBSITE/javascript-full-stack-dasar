// lebuh mengenal string
// contoh 1
function validateName(string) {
    for (let i = 0; i < string.length; i++) {
      console.log(Number(string[i])); // kita coba console.log dulu
    }
  }
  
  const name = "w3basho";
  console.log(validateName(name));



  function validateName2(string2) {
    for (let i = 0; i < string2.length; i++) {
      // console.log(Number(string2[i])); // kita coba console.log dulu
      if (Number(string2[i])) {
        return "ini index ke " + i + " dan berupa angka " + string2[i];
      }
    }
  }
  
  const name2 = "w3basho";
  console.log(validateName2(name2));

  console.log(parseInt("42.1px")); // 42
  console.log(Number("42.1px")); // NaN
  console.log(parseFloat("42.1px")); // 42.1

  /**
   * parseInt => hanya convert angka asli dan mengabaikan huruf juga angka dibelakang koma

Number => hanya menerima string berupa number, jika ada selain number seperti huruf maka akan mengembalikan NaN (Not a Number)

parseFloat => convert angka di belakang koma dan juga mengabaikan huruf
   */