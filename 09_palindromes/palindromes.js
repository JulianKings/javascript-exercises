const palindromes = function (palindrome) {
    // check soft filter first
    palindrome = softFilterString(palindrome).toLowerCase();
    let preArray = palindrome.split('');
    preArray.reverse();
    if(preArray.join('') === palindrome)
    {
        // now check hard filter
        palindrome = filterString(palindrome).toLowerCase();
        let palArray = palindrome.split('');
        palArray.reverse();
        return (palindrome === palArray.join(''));
    } else {
        return false;
    }
};

function filterString(stringToFilter)
{
    return stringToFilter.replace(/[^a-zA-Z ]/g, '').replace(/\s/g, '');    
}

function softFilterString(stringToFilter)
{
    return stringToFilter.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '');    
}

// Do not edit below this line
module.exports = palindromes;
