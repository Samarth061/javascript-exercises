const findTheOldest = function(person) {
    let oldest = person.sort((a,b)=> {
        if( a.yearOfDeath == undefined )
        {
            const today = new Date();
            a.yearOfDeath =  today.getFullYear();
        } 
        else if(b.yearOfDeath == undefined)
        {
            const today = new Date();
            b.yearOfDeath =  today.getFullYear();
        }
        let aAge = a.yearOfBirth - a.yearOfDeath;
        let bAge = b.yearOfBirth - b.yearOfDeath;
        return aAge > bAge ? 1 : -1;
    });
    console.table(oldest);
    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
