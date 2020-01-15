/*
* logika - booolean
 */


 /*
 * AND
 and diwajibkan semua harus benar
  */
 let one = true && true;
 let one2 = true && false;


  /*
 * OR
 and diwajibkan salah satunya harus benar
  */
 let two = true || true;
 let two2 = true || false;

 console.log(one); //true
 console.log(one2); // false
 console.log(two); //true
 console.log(two2); //true

//  ini kebalikanya
console.log(!one); //false
console.log(!one2); //true