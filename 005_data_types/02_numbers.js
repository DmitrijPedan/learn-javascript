/*
    JS have 2 number types:
        - number;
        - bigint;
*/

let billion = 1000000000;
let billion2 = 1e9;  // 1 and 9 zeros
console.log(billion === billion2);  //true

let million = 1e6;
console.log(million) // 1 000 000

let microSecond = 0.000001;
let ms2 = 1e-6; // six zeros to the left of 1
console.log(microSecond === ms2);    // true

//          1e-3 === 1 / 1000
//      1.23e-6  ===  1.23 / 1 000 000


// 0x - Hexadecimal numbers (16)
let hex255 = 0xff;
console.log('Hexadecimal 0xff: ', hex255);  //255

// 0b - binary numbers (2)
let bin255 = 0b11111111;
console.log('Binary 0b11111111: ', bin255); //255

// 0o - octal numbers (2)
let oct255 = 0o377;
console.log('Octal 0o377: ', oct255);       //255

console.log(hex255 === bin255); /// ...

// num.toString(base)  -  convert numbers to base (2, 8, 16, 36);
let number = 255;
console.log('255 to binary: ', number.toString(2));
console.log('255 to octal: ', number.toString(8));
console.log('255 to hex: ', number.toString(16));

//If we need to call the method 'toString' directly on the number (use ..):
console.log(123456..toString(2));

// ======== Number methods ==========
console.log('Math.floor(3.1): ', Math.floor(3.1));
console.log('Math.floor(-3.1): ', Math.floor(-3.1));

console.log('Math.ceil(3.1): ', Math.ceil(3.1));
console.log('Math.ceil(-3.1): ', Math.ceil(-3.1));

console.log('Math.round(3.3): ', Math.round(3.3));
console.log('Math.round(3.7): ', Math.round(3.7));

//removal of the fractional part without rounding
console.log('Math.trunc(3.7): ', Math.trunc(3.7));
console.log('Math.trunc(-3.7): ', Math.trunc(-3.7));

//toFixed() - !!! return string
console.log('(12.34).toFixed(1): ', (12.34).toFixed(1) ); // "12.3"
console.log('(12.34).toFixed(10): ', (12.34).toFixed(10) ); // "12.3400000000"


// ======== Inaccurate calculations ==========
console.log(1e500);
console.log('0.1 + 0.2 == 0.3 : ',  (0.1 + 0.2) === 0.3); // ???
console.log('0.1 + 0.2 : ',  0.1 + 0.2); // 0.30000000000000004
console.log(9999999999999999);

// two zeros
console.log(0 === -0);

console.log('=== isFinite, isNaN ===');

console.log('NaN != NaN !!!!: ', NaN === NaN);  // false
console.log('Object.is(NaN, NaN): ', Object.is(NaN, NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN(NaN));  // true
console.log(isNaN('some string')); //true

console.log(isFinite(15)); // true
console.log(isFinite('string')); // false
console.log(isFinite(Infinity)); // false


//parseInt и parseFloat
console.log('=== parseInt, parseFloat ===');
console.log('parseInt 120px: ', parseInt('120px')); // 120
console.log('parseInt 12.5: ', parseInt('12.5')); // 12
console.log('parseInt px12.5: ', parseInt('px12.5')); // NaN
console.log('parseFloat 12.5: ', parseFloat('12.5')); // 12.5
console.log('parseFloat 12.5.3: ', parseFloat('12.5.3')); // 12.5
console.log('parseFloat em12.5: ', parseFloat('em12.5')); // NaN

//Math
console.log('Math.random(): ', Math.random()); // from 0 to 1 without 1. example: 0.5722309050950
console.log('Math.random() * 100: ', Math.random() * 100); // from 1 to 100 without 100. example 63.8894983489
console.log('Math.ceil(Math.random() * 100): ', Math.ceil(Math.random() * 100)); // from 1 to 100 without 100. example: 45
console.log('Math.max(2,34,77,564,-9,6): ', Math.max(2,34,77,564,-9,6)); // 564
console.log('Math.min(2,34,77,564,-9,6): ', Math.min(2,34,77,564,-9,6)); // -9
console.log('Math.pow(2,10)', Math.pow(2,10)); // 1024. Возвращает число n, возведённое в степень power


//tasks
function getRandomNumbers(min, max) {
    return min + Math.random() * (max - min);
}

function getRandomIntegers(min, max) {
    return Math.ceil(min + Math.random() * (max - min));
}

console.log('getRandomNumbers: ', getRandomNumbers(2, 10));
console.log('getRandomIntegers: ', getRandomIntegers(2, 10));
console.log('\u{1F60D}')






