// This function reverse a string.
// T.ex reverse("jag testar") print out "ratset gaj"

var input="jag testar JavaScript";
var input="32243";

function reverse(str){

    var output = "";
    
    for(var i=str.length-1; i>= 0; i--){
        output += str[i];
    }
    
    return output;
}

console.log(input);
console.log(reverse(input));
