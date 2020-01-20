// FOR OF untuk array
 let index;
 let numbers = [1, 2, 3, 4, 5];
 
 for(index in numbers){
     console.log(numbers[index]);
 }
 for(index of numbers){
     console.log(index);
 }