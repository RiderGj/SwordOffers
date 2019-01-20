// console.log('AAA');
function Find(target, array)
{
    // write code here
    for (var i=0; i<array.length; i++){
        if (target === array[i][0]){
            return true;
        }else if (target < array[i][0]){
        	return false;
        }else {
            arr = array[i];
            if (arr.indexOf(target)!=-1){
                return true;
            }
        }
    }
    return false;
}

function Find1(target, array){
	return array.some(arr=>arr.some(e=>e===target));
}

console.log(Find(6, [[1, 3], [2, 4]]));

console.log(Find1(6, [[1, 3], [2, 4]]));
