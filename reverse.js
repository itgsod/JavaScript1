// This function reverse a string.
// T.ex reverse("jag testar") print out "ratset gaj"

var input="jag testar JavaScript";


function reverse(input){
    var str=input.split("");
    var output="";
    
    for(var i=str.length-1; i>= 0; i--){
        output += str[i];
       
    }
    
    return output;
}

console.log(input);
console.log(reverse(input));
