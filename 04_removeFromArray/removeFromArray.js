const removeFromArray = function(Array,...values) {
    var tmp;
    for(const value of values){
        for (let i = 0; i < Array.length; i++) {
            if (Array[i]==value && (typeof(Array[i])==typeof(value))) {
                for (let j = i; j < (Array.length-1); j++) {
                    tmp = Array[j]
                    Array[j]=Array[j+1];
                    Array[j+1]=tmp;
                    
            }
                Array.pop();
            }
        
        }
        

    };
    return Array;
}

// Do not edit below this line
module.exports = removeFromArray;

