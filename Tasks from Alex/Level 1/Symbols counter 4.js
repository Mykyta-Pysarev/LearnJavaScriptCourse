function countSymbols (word, letter, caseSens) {
    let counter = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] == letter.toUpperCase()
        && caseSens
        || word[i] == letter.toLowerCase()
        && caseSens) {
                counter++;
            } else if (word[i] == letter && !caseSens) {
                counter++
            }
    }
    return counter;
}

console.log(countSymbols("Antony Smith", "s", true)) // 1
console.log(countSymbols("Antony Smith", "s", false)) // 0
console.log(countSymbols("Antony Smith", "s")) // 0