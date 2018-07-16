function solve(s, d, m) {
    let coolCounter = 0;
    
    let superReducer = function(modArray){
        return modArray.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
    }
    for(let i = 0; i < s.length; i ++){
        if(superReducer(s.slice(i, i + m)) === d) coolCounter++;
    }
    return coolCounter;
}
