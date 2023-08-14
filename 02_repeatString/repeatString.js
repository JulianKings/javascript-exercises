const repeatString = function(string, repeats) {
    let stringToRepeat = "";

    if(repeats < 0)
    {
        return "ERROR";
    }

    for(let i = 0; i < repeats; i++)
    {
        stringToRepeat += string;
    }

    return stringToRepeat;

};

// Do not edit below this line
module.exports = repeatString;
