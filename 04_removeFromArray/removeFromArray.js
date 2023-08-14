const removeFromArray = function(baseArray, ... toRemove) {
    for(let i = 0; i < toRemove.length; i++)
    {
        let value = toRemove[i];
        baseArray = removeItemFromArray(baseArray, value);       
    }

    return baseArray;
};

const removeItemFromArray = function(baseArray, toRemove) {
    for(let i = 0; i < baseArray.length; i++)
    {
        let value = baseArray[i];
        if(value === toRemove)
        {
            baseArray.splice(i, 1);
        }        
    }

    return baseArray;
}

// Do not edit below this line
module.exports = removeFromArray;
