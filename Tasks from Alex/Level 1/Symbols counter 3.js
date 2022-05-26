function countSymbols (word, letter) {
    let counter = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] == letter.toUpperCase() 
            || word[i] == letter.toLowerCase() )
        counter++;
    }
    return counter;
}

console.log(countSymbols("Jeremy", "E")) // 2
console.log(countSymbols("Antony", "n")) // 2
console.log(countSymbols("Antony Smith", "s")) // 1