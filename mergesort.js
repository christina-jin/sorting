function mergeSort(arr) {
    let splited = [];
    let splitArray = split(arr);
    console.log(splitArray);

    if (splitArray.length === 1) {
        return splited.push(splitArray);
    }
    else {
        splited.push(split(splitArray[0]));
        splited.push(split(splitArray[1]));
    }
 }
 
 function split(arr) {
    if (arr.length === 1) return arr;
    let firstHalf = arr.slice(0,Math.floor(arr.length / 2));
    let secondHalf = arr.slice(Math.floor(arr.length / 2), arr.length)
    return [firstHalf, secondHalf];
 }
 
 function merge(arr1,arr2) {
    return [];
 }
