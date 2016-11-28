// This function return the length of the 
// longest word from a string


var input="I learn JavaScript";


function findLongestWord(input){
var words=input.split(" ");

var max=0,l,t=0;

for(var i=0;i<words.length;i++){
   
    l = words[i].length;
    
    // Find the longest length max
    // and record the corresponding index
    
    if( l > max) { max = l; t=i;}
    
    
}
return words[t];
}


console.log(findLongestWord(input));
