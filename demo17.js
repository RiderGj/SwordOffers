function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    var leftTree = null,
        rightTree = null;
     if (!pRoot1 || !pRoot2){
     	return false;
     }
    // while (pRoot1 != null){
    if(isEqual(pRoot1, pRoot2)){
    	console.log(1);
        return true;
    }else{
    	console.log(pRoot1);
        leftTree = pRoot1.left;
        rightTree = pRoot1.right;
        if (HasSubtree(leftTree, pRoot2)==true || HasSubtree(rightTree, pRoot2)==true){
            return true;
        }else{
            return false;
        }
    }
    // }
    return false;
}


function isEqual(pRoot1, pRoot2){
	if (!pRoot2){
		return true;
	}
	if (!pRoot1){
		return false;
	}
	if (pRoot1.val == pRoot2.val){
		return isEqual(pRoot1.left, pRoot2.left)&&isEqual(pRoot1.right, pRoot2.right);
	}else{
		return false;
	}
}

pRoot1 = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 4,
			left: null,
			right: null
		} ,
		right: null
	},
	right: {
		val: 3,
		left: null,
		right: null
	}
}


pRoot2 = {
	val: 2,
	left: {
		val: 4,
		left: null,
		right: null
	},
	right: null
}

pRoot3 = {
	val: 2,
	left: {
		val: 4,
		left: null,
		right: null
	},
	right: null
}
console.log(HasSubtree(pRoot1, pRoot2));
// console.log(pRoot2 == pRoot3)
// console.log(pRoot2.valueOf() == pRoot3.valueOf());
// console.log(typeof pRoot2.valueOf());