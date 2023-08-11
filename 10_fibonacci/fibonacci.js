const fibonacci = function(number) {
var sum=0;
    
    for (let i = 0; i < number; i++) {
        
        for (let j = 0; j < i; j++) {
            sum +=j;
            
        }

        
    }
   
   
};

// Do not edit below this line
module.exports = fibonacci;
