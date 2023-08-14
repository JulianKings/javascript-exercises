const sumAll = function(firstValue, secondValue) {
    if(firstValue < 0 || secondValue < 0)
    {
        return "ERROR";
    } 
    
    if (typeof(firstValue) !== "number" || typeof(secondValue) !== "number")
    {
        return "ERROR";        
    }

    let sum = 0;
    const minNumber = (firstValue > secondValue) ? secondValue : firstValue;
    const maxNumber = (firstValue > secondValue) ? firstValue : secondValue;
    for(let i = minNumber; i <= maxNumber; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
