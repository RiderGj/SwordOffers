function rectCover(number)
{
    // write code here
    var temp1 = 1,
        temp2 = 2,
        temp;
    if (number==1){
        return 1;
    }else if (number==2){
        return 2;
    }else{
        for(let i=0; i<number-2; i++){
            [temp1, temp2] = [temp2, temp1+temp2];
        }
        return temp2;
    }
}

console.log(rectCover(5));