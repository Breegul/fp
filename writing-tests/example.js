const findLargest = (arr) => {
    if(Array.isArray(arr)!=true || arr.length === 0){return -1;}
    
    let max = arr[0];
    let index = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
            index = i;
        }
    }
    return index;
}

module.exports = {
    findLargest
}