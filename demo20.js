//包含min函数的栈
var stack = [];
var index_min = [0];
function push(node)
{
    // write code here
    if(stack.length>0 && node<stack[index_min[index_min.length-1]]){
        index_min.push(stack.length);
    }
    stack.push(node);
}
function pop()
{
    // write code here
    if(index_min[index_min.length-1] == stack.length-1){
        index_min.pop();
    }
    return stack.pop();
}
function top()
{
    // write code here
    return stack[stack.length-1];
}
function min()
{
    // write code here
    return stack[index_min[index_min.length-1]];
}
push(3);
push(4);
push(2)
console.log(stack);
console.log(index_min);
console.log(min());