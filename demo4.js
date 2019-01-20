// function reConstructBinaryTree(pre, vin)
// {
//     // write code here

//     var top = pre[0];
//     var res = {
//     	val: top,
//     	left:null,
//     	right:null};
//     var index_top = vin.indexOf(top);
//     if (pre.length>1){
//         res.left = reConstructBinaryTree(pre.slice(1, 1+index_top), vin.slice(0, index_top));
//         res.right = reConstructBinaryTree(pre.slice(1+index_top, pre.length), vin.slice(index_top+1, vin.length));
//     }else{
//         res = {
//             val: pre[0] || '#',
//             left: null,
//             right: null
//         };
//     }
//     return res;
// }

function reConstructBinaryTree(pre, vin)
{
    // write code here
    var res = null;
    var top = pre[0];
    var index_top = vin.indexOf(top);
    if (pre.length>1){
        res = {
            val: top,
            left: reConstructBinaryTree(pre.slice(1, 1+index_top), vin.slice(0, index_top)),
            right: reConstructBinaryTree(pre.slice(1+index_top, pre.length), vin.slice(index_top+1, vin.length))
        };
    }else if(pre.length === 1){
    	res = {
    		val: pre[0],
    		left: null,
    		right: null
    	}
    }
    return res;
}
var result = reConstructBinaryTree([1,2,3,4], [4,3,2,1]);

console.log(result.left);