// This program translate a string into rövarspråket

var input="Javascript is a lot of fun :-)";
var output="";

function translate(input){
// Build a string that contains two times the consonant
// with an o in between
var vowel=['a','e','o','i','u','y','ä','å','ö',' '];
var inputlow = input.toLowerCase();
var splitinput = inputlow.split("");

// Find a consonant in the input
for(var i=0;i<inputlow.length;i++){
        var s=splitinput[i];
        var test=true;
        for(var j=0;j<vowel.length;j++){
            if( s == vowel[j]) {
                test=false;
                break;   
            } 
        }
        if (test == true) {
        
            var str="";
            str += s + "o" + s;
            //console.log(str); 
        }
        
        if (test){
            output += str;
        }else{
           output += input[i];
        }
}
return output;
}

console.log(input);
console.log(translate(input));
