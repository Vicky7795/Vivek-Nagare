function calculateFactorial(num) {
    let fact=1;
    for(i=1;i<=num;i++)
        fact=fact*i;

    return fact;
}

console.log(calculateFactorial(5));