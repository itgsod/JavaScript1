// This function insert a 'o' character in between each consonant
// inside a string str.
// Input is the following string
var str="Javascript is a lot of fun when it works";

function isVowel(c){
    var vowels=['a','e','i','o','u','y','ä','å','ö',
                'A','E','I','O','U','Y','Ä','Å','Ö',' '];
    var t=false;
    for(var i=0;i<vowels.length;i++){
      
        if(c == vowels[i]){
            t=true;
            break;
        }
        
    }
    return t;
}

function translate(str){
    var output="",c="";
    
    // Loop and get a character from str
    
    for(var i=0;i<str.length-1;i++){
        // Find a consonant c and add in output the following
        // string c + 'o' + c
        c = str[i];
        if(!isVowel(c)){
            output += c + 'o' + c;
           
            
        }else{
            output += c; 
        }
        
    }
    // Find a consonant c and add in output the following
    // string c + 'o' + c
    // If it is vowel insert it in ouput
    // Next character
    
    return output;
}

console.log(translate(str));
//console.log(isVowel('f'));
