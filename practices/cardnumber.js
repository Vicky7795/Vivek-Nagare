function hideCreditCard(cardNumber) {
    return cardNumber.replace(cardNumber.slice(0,12), "*".repeat(12));
}

console.log(hideCreditCard("1234567890123456"));