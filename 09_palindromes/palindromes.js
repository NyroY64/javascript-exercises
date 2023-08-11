const palindromes = function (word) {

    //No ponctuation 
    let ponctuation=["!",",","."," "]; 

    //spliting the word into an array of letters to work around it 
    
    
    //puts everything in lower case
    word=word.toLowerCase();


    let letters=word.split("");
    //get's rid of ponctuation & spaces
    for (let i = 0; i < letters.length; i++) {
        if (ponctuation.includes(letters[i])) {
            let newletters=[];
            letters.forEach(letter => {
                if(!ponctuation.includes(letter)){
                    newletters.push(letter);
                }
                
            });
            letters=newletters;
            word=letters.join("");
            
        }
        
    }
    //getting rid of ponctuation marks (we compare each letter to find if it matches a ponctuation symbole from the array above ) 
    
    
    //after the operation we give newLetters it's original name letters
    
    
    let end=letters.length-1;

    let newWord="";

    for (let i = end; i >= 0; i--) {
        newWord+=letters[i];    
        
    }
    
    if(newWord ==word){
        return true;
    }else return false;
};

// Do not edit below this line
module.exports = palindromes;
