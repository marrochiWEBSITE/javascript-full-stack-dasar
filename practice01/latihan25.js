// FOR LOOP

// contoh 1
let result;
for(let i=0; i<5; i++){
   if (i == 2){
           result += '\n';
       for(let j=0; j<5; j++){
         result += '*\t';
       }
           
   }else{
   result += '\n';
   for(let j=0; j<5; j++){
       if(j == 1 || j == 2 || j == 3){
             result += '=\t';
       }else{
        result += '*\t';
       }
   }
   }
}

console.log(result);

// contoh 2
function stringOK(string){
    let result2 = '';
        for(let i = string.length - 1; i >= 0; i-- ){
            result2 += string[i];
        }
        return result2;
}
console.log(stringOK('aku'));
console.log(stringOK('kamu jahat'));
console.log(stringOK('suka suka'));


