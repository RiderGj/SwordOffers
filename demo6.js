// function Fibonacci(n)
// {
//     // write code here
//     if (n==0){
//         return 0;
//     }
//     else if (n==1){
//         return 1;
//     }else {
//         return Fibonacci(n-1)+Fibonacci(n-2);
//     }
// }


function Fibonacci(n)
{
    // write code here
    var temp1 = 0,
        temp2 = 1,
        temp;
    if (n==0){
        return 0;
    }else if (n==1){
        return 1;
    }else{
        for(let i=0; i<n-1; i++){
            [temp1, temp2] = [temp2, temp1+temp2];
        }
        return temp2;
    }
}

console.log(Fibonacci(10));
