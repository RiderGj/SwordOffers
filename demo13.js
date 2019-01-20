function reOrderArray(array)
{
    // write code here
    var arr1 = [],
        arr2 = [];
    for (let i=0; i<array.length; i++){
        if(array[i]%2==1){
            arr1.push(array[i]);
        }else{
            arr2.push(array[i]);
        }
    }
    console.log(arr1);
    console.log(arr2);
    return arr1.concat(arr2);
}

console.log(reOrderArray([1,3,4,7,2]));