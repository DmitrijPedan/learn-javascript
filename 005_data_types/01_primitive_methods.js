'use strict';
/*
    JS has a 7 primitive types:
        - string;
        - number;
        - bigint;
        - boolean;
        - symbol;
        - null;
        - undefined;
 */

// null and undefined don't have methods.
// other primitive types methods (examples):

let string = 'Hello world!';
console.log(string.toUpperCase());

let number = 1.234;
console.log(number.toFixed(1));


// !!!
const number1 = 0;
const number2 = new Number(0);
console.log('typeof number1: ', typeof number1);
console.log('boolean number1: ', Boolean(number1));
console.log('!!! typeof number2: ', typeof number2);    // !!!! Object
console.log('!!! boolean number2: ', Boolean(number2)); // !!!! True

//task1
let str = 'Nice to meet you, have a good day!';
// str.testProperty = 'test';
// console.log('task1: ', str.testProperty); //error in strict mode










