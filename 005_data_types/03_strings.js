// === strings ===

let message = "JavaScript strings";

let value = 154;
console.log(`Value: ${value}`);

let exampleList = `1. John
2. Jane
3. Howard `;
console.log(exampleList);

let guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList);

//escaping character
console.log('I\'m the Walrus!' ); //I'm the Walrus!

//length (property)
console.log('Hello length: ', 'Hello'.length); //5

//Access to symbols
console.log(message[0]); // J
console.log(message[50]); // undefined

//for of
for (let char of message) {
    console.log('===> ', char);
}

//strings not changed
message[0] = 'A';
console.log(message); // JavaScript strings

//methods
console.log('toUpperCase(): ', message.toUpperCase());
console.log('toLowerCase(): ', message.toLowerCase());
console.log('message[1].toUpperCase(): ', message[1].toUpperCase()); // A

//Search for a substring
console.log('Find "Java" in message: ',  message.indexOf('Java')) // return 0 - index (finded)
console.log('Find "Script" in message: ',  message.indexOf('Script')) // return 4 - index (finded)
console.log('Find "script" in message: ',  message.indexOf('script')) // return -1 (not finded) !

let str = 'Widget with id';
console.log(str.indexOf('id') ) // 1 ( W -id- get with id )
console.log(str.indexOf('id', 3) ) // 12 (start from [3] -  Widget with -id- );

//Search from the end of the string to the beginning.
console.log(str.lastIndexOf('id')); // 12

//bitwise operator ~
console.log('~5: ', ~5); // -6.  same: -(5+1);
console.log('~-5: ', ~-5); // 4.  same: -(-5+1);

//bitwise operator ~ for indexOf()

if(message.indexOf("Java") !== -1) {
    console.log('"Java" in message finded !');
}

if(~message.indexOf("Java")) {
    console.log('"Java" in message finded !');
}

//if position is not needed
console.log('===> message: ', message)
console.log('message.includes("Java"): ', message.includes("Java")); // true
console.log('message.includes("Lava"): ', message.includes("Lava")); // false

//start string, end string
console.log('message.startsWith("Java"): ', message.startsWith("Java")); // true
console.log('message.startsWith("java"): ', message.startsWith("java")); // false
console.log('message.endsWith("ings"): ', message.endsWith("ings")); // true

//Getting a substring
let string = 'JavaScript is perfect';
console.log(`===> string:  ${string}`);
console.log('string.slice(0, 5): ',  string.slice(0, 5)); // JavaS
console.log('string.slice(0, 45): ',  string.slice(0, 45)); // JavaScript is perfect
console.log('string.slice(4, 5): ',  string.slice(4, 5)); // S
console.log('string.slice(4): ',  string.slice(4)); // Script is perfect
console.log('string.slice(-7): ',  string.slice(-7)); // perfect
console.log('string.slice(-7, -2): ',  string.slice(-7, -2)); // perfe

//UTF-16
console.log('code "a": ', "a".codePointAt(0)); //97
console.log('code "z": ', "z".codePointAt(0)); //122
console.log('from code 122: ', String.fromCodePoint(122)); // z

// get alphabet
let alphabet = [];
for (let i = "a".codePointAt(0); i <= "z".codePointAt(0); i++) {
    alphabet.push(String.fromCodePoint(i));
}
console.log('alphabet: ', alphabet);

//compare string UTF-16
console.log('Österreich' > 'Zealand' ); // true
console.log('code "Ö": ', "Ö".codePointAt(0)); //214
console.log('code "Z": ', "Z".codePointAt(0)); //90

//Correct comparison
// return negative number ( if str < str2.)
// return positive number ( if str > str2.)
// return 0 ( if str === str2.)
console.log( 'Österreich'.localeCompare('Zealand') ); // -1 ( if str < str2.)


//task1
const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);
console.log('task1: ', ucFirst('dima'));

//task2
function checkSpam(str, substr) {
    return str.toLowerCase().includes(substr.toLowerCase());
}
console.log('task2: ', checkSpam('Buy Viagra now !!!', 'viagra'));
console.log('task2: ', checkSpam('Buy Herbalife now !!!', 'viagra'));

//task3
function truncate (str, len) {
    return str.length > len ? (str.slice(0, len-1) + '...') : str;
}
console.log('task3: ', truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log('task3: ', truncate("Всем привет!", 20));

//task4
function extractCurrencyValue(strPrice) {
    return +strPrice.slice(1);
}
console.log('task4: ', extractCurrencyValue('$120'));
console.log('task4: ', extractCurrencyValue('$2467'));
