function oke(player, computer){
    let result;
    if(player === 'scissor'){
        if(computer === 'scissor'){
            result = 'draw';
        }
        else if(computer === 'rock'){
            result = 'player win';
        }
    }else if(player === 'rock'){
        if(computer === 'scissor'){
            result = 'computer win'
        }
    }
    else if(player === 'paper'){
        if(computer === 'paper'){
            result = 'draw';
        }
    }
    return result;
}

console.log(oke('scissor', 'rock'));//player win
console.log(oke('rock', 'scissor'));//computer win win
console.log(oke('paper', 'paper'));// draw
