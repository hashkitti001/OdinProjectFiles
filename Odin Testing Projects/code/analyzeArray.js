function analyzeArray(arr){
    let obj = {};
    let sum = arr.reduce((initValue, nextValue) => initValue + nextValue)
    obj.average = sum / arr.length;
    obj.min = Math.min(...arr);
    obj.max = Math.max(...arr);
    obj.length = arr.length;
    return obj;
}
module.exports = analyzeArray;