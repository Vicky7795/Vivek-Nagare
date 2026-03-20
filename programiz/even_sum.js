function addEvenNumbers(n) {
    sum=0;
    for(i=0;i<=n;i++)
        if(i%2==0)
            sum=sum+i;

    return sum
}

console.log(addEvenNumbers(10));