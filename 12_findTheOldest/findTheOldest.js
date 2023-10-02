const findTheOldest = function(people) {
    const oldestPerson=people.reduce((oldest,current)=>{
        return oldest = ((current.yearOfDeath-current.yearOfBirth)>oldest)? oldest=current : console.log('no'); 
    },28)
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
