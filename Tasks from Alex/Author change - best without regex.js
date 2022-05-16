"use strict";
const inputText = "Highly recommend you to read at least one work of Shakespeare. He made his masterpieces for hundreds of years before London, Dickens and Fitzgerald. Hope to buy last book to my collection in 2022, and read it.";

const parser = (txt) => {

    let text = txt.split(' ');

    let redactText = text.map((item, index, arr) => {
        if (index > 0
            && item[0] === item[0].toUpperCase()
            && !isFinite(item[0])
            && !arr[index - 1].endsWith(".")
            && !arr[index].endsWith(".")
            && !arr[index].endsWith(",")) {
            return item = 'writer';
        } else if (index > 0
            && item[0] === item[0].toUpperCase()
            && !isFinite(item[0])
            && arr[index].endsWith(".")) {
            return item = 'writer.';
        } else if (index > 0
            && item[0] === item[0].toUpperCase()
            && !isFinite(item[0])
            && arr[index].endsWith(",")) {
            return item = 'writer,';
        } else {
            return item;
        };
    });

    return redactText.join(' ')
}

console.log(parser(inputText));

// let newText = text.map((item , index) => index > 0 
// && item[0] === item[0].toUpperCase() 
// && !isFinite(item[0])
// && !text[index - 1].endsWith('.')
// ? item = 'wrighter' : item
// );