function countSymbols (word, letter) {
    let counter = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] == letter)
        counter++;
    }
    return counter;
}

console.log(countSymbols("Jeremy", "e")) // 2
console.log(countSymbols("Antony", "n")) // 2
console.log(countSymbols("Antony Smith", "s")) // 0 (because we looking for small "s", but in "Smith" we have big "S")