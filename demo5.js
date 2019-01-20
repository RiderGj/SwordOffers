var [stack1, stack2] = [[], []]

function push(node)
{
    // write code here
    stack1.push(node);
}
function pop()
{
    // write code here
    if(stack2.length != 0){
        return stack2.pop();
    }else{
        for(let i=0; i<stack1.length; i++){
            stack2.push(stack1[stack1.length-1-i]);
        }
        stack1 = [];
        return stack2.pop();
    }
}



