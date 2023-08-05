const reverseString = function(word) {
    //on transforme dabord la chaine de character en tableau puis on peut manipuler les different charactere pour les inversé ect .....
    
    const myArr =word.split("");
    word ="";
    for (var i = 0; i < myArr.length; i++) {
        
        word+=myArr[myArr.length-(i+1)];
    }
 return word;

};

// Do not edit below this line
module.exports = reverseString;
