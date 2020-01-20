function myReverse(string) {
    let result = "";
  
    for (let i = string.length - 1; i >= 0; i--) {
      result += string[i];
    }
  
    return result;
  }
  
  console.log(myReverse("marrochi"));
  
  function myOhay(string){  
      // cara kedua
      let result = string.split('').reverse().join('');
      return result;
    }

    console.log(myOhay("marrochi"));