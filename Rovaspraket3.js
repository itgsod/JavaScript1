// This program double each consonant in an input string and insert a 'o in between each
// consonant. It's called Rövarspråket.

function isConsonant(char){
    var vowels=['a','e','i','o','u','y','ä','å','ö','A','E','I','O','U','Y','Ä','Å','Ö',' '];
    for(var i=0;i<vowels.length;i++){
        if(char == vowels[i]){
            return false;
        }
    }
    return true;
}

function isVowel(char){
    var vowels=['a','e','i','o','u','y','ä','å','ö','A','E','I','O','U','Y','Ä','Å','Ö',' '];
    for(var i=0;i<vowels.length;i++){
        if(char == vowels[i]){
            return true;
        }
    }
    return false;
    
}

function translate(){

//var input = "It is a lot of fun to learn JavaScript";
var input = document.getElementById("mypara1").value;
var output="";


for(var i=0; i<input.length;i++ ){
    var c = input[i];

    if(!isVowel(c)) {
        output += c + 'o' + c;
    }else if(isVowel(c)){
        output += c;
    }else{
        
        output += c;
    }
        
}
document.getElementById("output").innerHTML=output;
return output;
}


function decrypt(){
    var input="Itot isos a lolotot ofof fofunon toto lolearornon JoJavovaSoScocroripoptot";
    var output="";
    
    var i=0;
    while(i<input.length){
        c = input[i];
        
        if(isConsonant(c)){
            output += c;
            i+=3;
            
        }else if(!isConsonant(c)){
            output += c;
            i++;
        }
        
    }

    
    return output;
}

console.log(translate());
console.log(decrypt());
