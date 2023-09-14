const findTheOldest = function(peopleArray) {
    const sortedArray = peopleArray.sort((a, b) => {
        if(a.yearOfDeath === undefined)
        {
            a.yearOfDeath = (new Date()).getFullYear();
            a.status = "Alive";
        } else if(a.status === undefined) {
            a.status = "Dead";
        }

        if(b.yearOfDeath === undefined)
        {
            b.yearOfDeath = (new Date()).getFullYear();
            b.status = "Alive";
        } else if(b.status === undefined) {
            b.status = "Dead";
        }

        if(findAge(a.yearOfBirth, a.yearOfDeath) < findAge(b.yearOfBirth, b.yearOfDeath))
        {
            return 1;
        } else if(findAge(a.yearOfBirth, a.yearOfDeath) > findAge(b.yearOfBirth, b.yearOfDeath))
        {
            return -1;
        } else {
            return 0;
        }
    })

    const alivePerson = sortedArray.find(person => person.status === 'Alive');

    if(alivePerson !== undefined && sortedArray[0] === alivePerson)
    {
        return sortedArray[0];
    } else {
        return null;
    }
};

function findAge(birth, passed)
{
    return passed - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
