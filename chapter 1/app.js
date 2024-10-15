// let can be reassigned
let age = 25;
let year = 2024;

console.log(age, year);

age = 30;
console.log(age);

// const cannot be reassigned
const points = 100;
console.log(points);

// old way to create variables... do not use
var score = 75;
console.log(score);

// strings
console.log('hello world');
let email = "benmelville@test.com";

// string concatenation
let firstName = 'Ben';
let lastName = 'Melville';

console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);

// getting characters
console.log(firstName[1]);

// string length
console.log(lastName.length);

// string methods
console.log(firstName.toUpperCase());
let result = firstName.toLowerCase();
console.log(result, firstName);

let index = email.indexOf('@');
console.log(index);

// common string methods
let lastIndex = email.lastIndexOf('z');
console.log(lastIndex); // -1 since not in string

/*
NOTE: 

slice() 
- treats negative indicies as offsets from the end of the string.
For example, str.slice(-2) extracts the last two characters of the string.
- if the start index is greater than the end index, it returns an empty 
string

substring() 
- treats negative indicies as 0. For example, str.substring(-2) 
is the same as str.substring(0).
- if the start index is greater than the end index, it swaps the two indicies
before extracting the substring

slice() is generally used...
*/

let slice = email.slice(3, 5); // note: index 5 is NOT included
console.log(slice);

let substring = email.substring(3, 9);
console.log(substring);

let replacing = email.replace('e', 'w'); // only replaces the first e with w
console.log(replacing);

// NUMBERS

let radius = 10;
const pi = 3.14159;

console.log(radius, pi);


// math operators +, -, *, /, **, %
console.log(10/2);

let remainder = radius % 3;
console.log(remainder);

let area = pi * radius ** 2;
console.log(area);

let likes = 10;
console.log(likes);
likes++;
console.log(likes);
likes += 10;
console.log(likes);

console.log(10/'hello'); // NaN - not a number


// ARRAYS
let ninjas = ['ben', 'makenna', 'david', 'nick', 'wells'];
console.log(ninjas[1]);

ninjas[1] = 3;
console.log(ninjas[1]);

let ages = [20, 67, 34, 60];
console.log(ages);

// array methods

console.log(ninjas.length);

// join
console.log(ages.join());

// indexOf
console.log(ninjas.indexOf('wells'));

// concat
let concatArray = ninjas.concat(['nick', 'greg']); // adds nick and greg to array
console.log(concatArray);

/*
push
- alters the OG value of the array
*/
let pushArray = ninjas.push('hammond'); // returns length of new array
console.log(pushArray); // logs 6

/*
pop
- alters the OG value of the array
*/
let popArray = ninjas.pop(); // returns the value that has been popped from the array
console.log(popArray);

// NULL AND UNDEFINED
// let myAge; --> this leads to myAge being undefined
let myAge = null; // --> this leads to myAge being null

// myAge is null
// myAge + 3 is 3 because null is 0 in expression
// the age is null
console.log(myAge, myAge + 3, `the age is ${myAge}`);

// BOOLEANS

// booleans and comparisons
console.log(true);
console.log(false);

// methods can return booleans
let thingy = 'luigi@theben.com';
let thingyArray = ['ben', 'wells', 'nick', 'david'];

let thingyResult = thingy.includes('@');
let thingyArrayResult = thingyArray.includes('nick');
console.log(`thingyResult is ${thingyResult}`)
console.log(`thingyArrayResult is ${thingyArrayResult}`);

// comparison operators
let computers = 34;
// loose equality - type is NOT considered 
console.log(computers == 34); // true
console.log(computers == '34'); // true
// strict equality - type IS considered
console.log(computers === '34'); // false
console.log(computers !== '34'); // true

console.log('ben' < 'makenna'); // true because b comes before m in alphabet

// type conversion
let total = '100';
total = Number(total); // cast total to a number
console.log(total + 1);
console.log(typeof(total));

let stringToNum = Number('ben');
console.log(stringToNum); // NaN

let numberToBool = Boolean(100);
console.log(numberToBool); // true, 0 would be false negative nums are true
// strings are true if they are longer than 0, "" is false

console.log(Boolean("")); // false