function sum(arr){
        var s=0;
        for(var i=0;i<arr.length;i++){
            s += arr[i];
        }
        return s;
}

function mult(arr){
        var m=1;
        for(var i=0;i<arr.length;i++){
            m *= arr[i];
        }
        return m;
}



console.log(sum([1,2,3,4]));
console.log(mult([1,2,3,4]));
