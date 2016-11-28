// This program double each consonant and insert a 'o in between

function isConsonant?(char){
    var test=true;
    var vowels=['a','e','i','o','u','y','ä','å','ö','A','E','I','O','U','Y','Ä','Å','Ö',' '];
    for(var i=0;i<vowels.length;i++){
        if(char == vowels[i]){
            test=false;
            return test;
        }
    }
    return test;
}

function translate(){
// Select an input
var input="It is a lot of fun to learn JavaScript";
var output="";

// Find all consonants in a string str
// A consonant is not vowel

var vowels=['a','e','i','o','u','y','ä','å','ö','A','E','I','O','U','Y','Ä','Å','Ö',' '];
var test=true;

// Convert the input string into an array

var arr=input.split("");
//console.log(arr);

for(var i=0; i<input.length;i++ ){
    var c = input[i];
    test = true;
    
    //for(var j=0;j<vowels.length;j++){
        //if(c == vowels[j]){
            //test=false;
        //}
      
    //}  
    
    // If the character is not vowel then it is a consonant
        
    //if(test){
        //output += c + 'o' + c;
    //}else{
        //output += c;
            
    //}
    
    if(isConsonant?(c)) {
        output += c + 'o' + c;
    }else{
        output += c;
    }
        
}

return output;
}

console.log(translate());

