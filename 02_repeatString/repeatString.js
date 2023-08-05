const repeatString = function(wordToRepeat,repeatTimes) {
    var result="";
    if(repeatTimes < 0){
        return "ERROR";
    }

    for (var i = 1; i <= repeatTimes; i++) {
         result+=wordToRepeat;
        
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
