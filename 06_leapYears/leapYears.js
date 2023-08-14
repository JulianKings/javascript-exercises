const leapYears = function(... numbers) {
    
    for(let i = 0; i < numbers.length; i++)
    {
        let value = numbers[i];
        if(typeof(value) !== "number")
        {
            return false;
        }

        if(value % 4 === 0)
        {
            if(value % 100 === 0 && value % 400 !== 0)
            {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }

};

// Do not edit below this line
module.exports = leapYears;
