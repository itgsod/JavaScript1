//This function which says whether a number is perfect. 
//Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive
//divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all
//its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4
//+ 7 + 14. This is followed by the perfect numbers 496 and 8128.

function sum(arr){
        var s=0;
        for(var i=0;i<arr.length;i++){
            s += arr[i];
        }
        return s;
}

function perfect(num){
    var result=[];
    var div=[1];
    
    for (var i=2;i<num;i++){
        if (num % i == 0){
            div.push(i);
        }
    }
    
    if(sum(div) == num){
        return [num,true,div];
    }else{
        return [num,false,div];
    }
  
}

console.log(perfect(8128));
