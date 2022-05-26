function antiSpy(text) {
let arrText = text.split(" ").map(item => item.includes('@')
     ? item = 'HIDDEN_DATA' 
     : item);
return arrText.join(" ");
}

const text = `If you agree with that, just let me know to obama@mail.us or
 newpower@gmail.com and I'll reach out as soon as possible.`

 console.log(antiSpy(text)) /* "If you agree with that, just let me know
  to HIDDEN_DATA or HIDDEN_DATA and I'll reach out as soon as possible." */