// Define a function reverse(str) that computes the reversal
// of a string. For example, reverse("jag testar") 
// should return the string "ratset gaj".
// P.Martinet 29/11 2017

// Define an input string str
var str="Jag testar JS";

function reverse(str){
var output="";
var l=str.length;

// We take the last character from str and then the next last one 
// and so on until the first character.
for(var i=l-1;i>=0;i--){
    
    output += str[i];
}


return output;
}

console.log(reverse(str));
