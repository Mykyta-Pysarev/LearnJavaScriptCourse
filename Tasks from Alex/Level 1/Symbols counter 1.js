function countSymbols (word) {
    let counter = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'A')
        counter++;
    }
    return counter;
}

console.log(countSymbols("Jeremy")); // 0
console.log(countSymbols("Antony")); // 1
console.log(countSymbols("Barack Obama")); // 4