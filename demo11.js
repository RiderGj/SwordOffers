function NumberOf1(n)
{
    var cnt = 0;
    // write code here
    if(n>0){
        while (n!=1 && n!=0){
            if(n%2 == 1){
                cnt++;
            }
            n = parseInt(n/2);
        }
        return cnt+1;
    }else if(n==0){
        return 0;
    }else if(n==-1){
    	return 32;
    }else{
        n = Math.abs(n) -1;
        while (n!=1 && n!=0){
            if(n%2 == 1){
                cnt++;
            }
            n = parseInt(n/2);

        }
        console.log(cnt+1);
        return 32-cnt-1;
    }
}
console.log(NumberOf1(3));
console.log(NumberOf1(-1));
console.log(-3>>>0);