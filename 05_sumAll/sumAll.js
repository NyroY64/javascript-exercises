const sumAll = function(...values) {
 


//**********************************************the Check Part******************************
 //checks if a the sent value isn't a negative / non-number   

let isViable =true; // if stays true then is valide
  values.forEach(value => {
    
    if (typeof(value)!=typeof(1) || Math.sign(value)==-1) {
        isViable =false;
    }
    
  });
  if (isViable==false)return "ERROR"; //check for basic nega/non-num



  //********************************************The math part *******************************
    let sum=0;

  values.sort(function(a, b){return a - b}); //sorts the array in assending order

  let minValue =values[0]; //min value is first 
  let maxValue =values[1]; //max value is last 
  

    while(maxValue>=minValue){ 
        //while loop to sum up all the numbers between them including the last one 
        sum+=maxValue;
        maxValue-=1;

    }
    return sum;
        
};

// Do not edit below this line
module.exports = sumAll;
