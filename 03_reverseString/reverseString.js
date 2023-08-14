const reverseString = function(word) {
    let concat = "";
    for (let i = 0; i < word.length; i++) 
    {
        concat = concat.concat(word.charAt(word.length - i - 1));        
    }

    return concat;
};

// Do not edit below this line
module.exports = reverseString;
