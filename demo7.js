function jumpFloor(number)
{
    // write code here
    if(number == 1){
        return 1;
    }else if(number == 2){
        return 2;
    }else{
        return jumpFloor(number-1) + jumpFloor(number-2);
    }
}

console.log(jumpFloor(3));