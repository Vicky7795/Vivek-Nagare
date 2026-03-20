function checkDisarium(num) {
     return num.toString()
              .split("")
              .reduce((sum, digit, i) => sum + digit ** (i + 1), 0) === num
           ? "Disarium" : "Not Disarium";
}

console.log(checkDisarium(175));