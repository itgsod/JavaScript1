// This function return the length of the 
// longest word from a string


var input="I learn JS very fast because because it is fun";


function findLongestWord(input){
    var words=input.split(" ");
    
    var max=0,len,t=0,p=0;
    var longwords=[];

    for(var i=0;i<words.length;i++){
   
        len = words[i].length;
    
        // Find the longest length max
        // and record the corresponding index
        
        if( len > max) { max = len; t = i;};
        
    }
var p=0;
for(var i=0;i<words.length;i++){
     len = words[i].length;
     if( len == max) { longwords[p]= words[i]; p++};

}
return [longwords,max];
}

console.log(input);
//console.log("The longest word is: " + findLongestWord(input)[0] + " and has " + findLongestWord(input)[1] + " characters");
console.log(findLongestWord(input));
