const fibonacci = function(number) {
    if(isNaN(number) || number < 0)
    {
        return "OOPS";
    } else {
        let fibb = [0];
        for(let i = 0; i < (number+1); i++)
        {
            if(i === 1)
            {
                fibb.push(1);
            } else if(i > 1) {
                let fibbNumber = fibb[i-2] + fibb[i-1];
                fibb.push(fibbNumber);
            }
        }

        return fibb[number];
    }

};

// Do not edit below this line
module.exports = fibonacci;
