function replaceSpace(str)
{
    // write code here
    return str.split(' ').join('%20');
}

console.log(replaceSpace('I am happy!'));