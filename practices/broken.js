function maxWordsCanType(str, brokenLetter) {
     return str.split(" ").filter(word => !word.includes(brokenLetter)).length;
}

str="hello world";
brokenLetter= 'd';
console.log(maxWordsCanType(str,brokenLetter));
