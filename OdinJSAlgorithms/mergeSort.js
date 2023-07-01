function merge(leftHalf, rightHalf){
    let output = [];
    let i = 0;
    let j = 0;
    while(i < leftHalf.length && j < rightHalf.length){
       if(leftHalf[i] < rightHalf[j]){
           output.push(leftHalf[i]);
           i++;
       }
       else{
           output.push(rightHalf[j])
           j++;
       }
      
    }
    return output.concat(leftHalf.slice(i)).concat(rightHalf.slice(j));
   }
function mergeSort(arr){
    let arrLength = arr.length;
    if(arrLength <= 1){
        return arr;
    }
    let midpoint = Math.floor(arrLength / 2);
    let leftHalf = arr.slice(0, midpoint);
    let rightHalf = arr.slice(midpoint, arrLength);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

