function antiSpy(text, hidden = 'HIDDEN_DATA') {
let arrText = text.split(" ").map(item => item.includes('@')
     ? item = hidden 
     : item);
return arrText.join(" ");
}

const text = `If you agree with that, just let me know to obama@mail.us or
 newpower@gmail.com and I'll reach out as soon as possible.`

console.log(antiSpy(text)) // "If you agree with that, just let me know to HIDDEN_DATA or HIDDEN_DATA and I'll reach out as soon as possible."
console.log(antiSpy(text, "MY_MAIL")) // "If you agree with that, just let me know to MY_MAIL or MY_MAIL and I'll reach out as soon as possible."
console.log(antiSpy(text, "XXXX")) // "If you agree with that, just let me know to XXXX or XXXX and I'll reach out as soon as possible."