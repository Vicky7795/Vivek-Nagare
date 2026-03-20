function checkPronic(num) {
for (let i = 0; i <= num; i++) {
        if (i * (i + 1) === num) {
            return "Pronic";
        }
    }
    return "Not Pronic";
}

console.log(checkPronic(12));