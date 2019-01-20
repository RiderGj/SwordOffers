// 从上往下打印二叉树
function PrintFromTopToBottom(root)
{
    // write code here
    // ！！注意临界情况的处理
    if(root == null){
        return [];
    }
    var layer = [root];
    var result = [root.val];
    while(layer.length != 0){
        var layer_new = [];
        for (let i=0; i<layer.length; i++){
            if(layer[i].left!=null){
                layer_new.push(layer[i].left);
                result.push(layer[i].left.val);
            }
            if(layer[i].right!=null){
                layer_new.push(layer[i].right);
                result.push(layer[i].right.val);
            }
        }
        //result.concat(layer_new);
        layer = layer_new;
    }
    return result;
}
// function PrintFromTopToBottom(root){
//     var data
// }

var root1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    }
}
var root2 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: {
            val:3,
            left: null,
            right: null
        }
    }
}
var root3 = {
    val: 1,
    left: null,
    right: null
}
console.log(PrintFromTopToBottom(root1));
console.log(PrintFromTopToBottom(root3));
