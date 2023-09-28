const fibonacci = function(number) {

    if(number <0 )return "OOPS"; 

    let current =1;
    let last =0;
    let tmp;
    for (let i = 0; i < (number-1); i++) {
        tmp = current;
        current = current + last;
        last = tmp;
    
    }
    return current;
   
   
};



// Do not edit below this line
module.exports = fibonacci;
