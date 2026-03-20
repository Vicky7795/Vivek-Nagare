function ginortSOrder(input) {
    let lower = [];
    let upper = [];
    let odd = [];
    let even = [];

    for (let ch of input) {
        if (ch >= 'a' && ch <= 'z') {
            lower.push(ch);
        } else if (ch >= 'A' && ch <= 'Z') {
            upper.push(ch);
        } else if (ch % 2 === 1) {
            odd.push(ch);
        } else {
            even.push(ch);
        }
    }

    return lower.sort().join("") +
           upper.sort().join("") +
           odd.sort().join("") +
           even.sort().join("");

}
console.log(ginortSOrder("HelloWorld1234"));