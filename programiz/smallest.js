function findSmallest(num1, num2) {
    if(num1>num2)
        return num2;
    else
        return num1;
}

console.log("Smallest Number:",findSmallest(8,3));
