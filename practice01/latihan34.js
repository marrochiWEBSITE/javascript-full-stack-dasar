const  number = 23;

const strNum = String(number);
// atau
const strNum2 = number.toString();

console.log(number);
console.log(strNum);



function cGenap(number){
    const strNum2 = String(number);

    for(let i=0; i < strNum.length ; i++){
        const numFromStr2 = Number(strNum2[i]);

        if(numFromStr2 % 2 === 0){
            return numFromStr2 ;
        }

    }
}




const rscGenap = cGenap(12345);
console.log(rscGenap);

const unique = String.fromCharCode(104, 101, 108, 108, 111); //"hello"

console.log(unique);