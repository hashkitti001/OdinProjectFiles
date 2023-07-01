function fibs (n) {
    let arr = [0,1];
    if(n <= 0){
        return "Please enter a number greater than 0";
    }
    if(n == 1){
         return [0];
    }
    if(n == 2){
        return arr;
    }
    else{
       let startingValue = 2;
       while(startingValue < n){
        arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        startingValue++;
       }
       return arr;
    }
    
}