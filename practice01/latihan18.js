/*
* logika not boolean
------------------ falesy
false;
null;
0;
"";
NaN;
 */

 let ok = false || 'ok' ;
 console.log(ok);
// kiri false maka nilai belah kanan selain falesy true itu yg ditampilkan


 let ok2 = false || 'ok2' || 3 ;
 console.log(ok2);
//intinya gini jika nilai true sudah ditemukan maka yg seblah kananya akan diabaikan walaupun true


let ok3 = false || '' || NaN || 0 || 'ok3' ;
console.log(ok3);