// function declaration
function greet() {
    console.log('hello there');
}

greet();

// function expression - store functions in variables
// declaring function as const because we do not want to overwrite it later
const speak = function() {
    console.log('I am speaking');
};

speak();

/*
Hoisting is a mechanism where variable and function declarations are moved to the
top of their scope before code execution. this means you can use a variable or function
before it is declared in your code. 

Points
- ONLY declarations are hoisted, not initializations
- Function declarations are hoisted completely, while variables declared with var are 
hoisted but initialized with undefined
- let and const declarations are not hoisted in the same way as var. They are in a
"temporal dead zone" until they are declared.
*/
hoisting();

function hoisting() {
    console.log('hoisting'); // works
}

// hoistingExpression();
// const hoistingExpression = function() {
//     console.log('hoisting expression does NOT work'); // throws an error
// }

// arguments and parameters

const speakName = function(name = 'wells') {
    console.log(`good day ${name}`)
}

speakName('ben')
speakName(); // prints out good day wells

// returning values
const calcArea = function(radius) {
    return 3.14 * radius ** 2;
}

let area = calcArea(6);
console.log(area);

/* arrow functions
 - need () around radius if there are any number of parameters other than one
*/

// this
const calcAreaArrow = radius => 3.14 * radius ** 2;

// is the same as this
const calAreaArrowLong = radius => {
    return 3.14 * radius ** 2;
}

// which is the same as this
const calcAreaExtraLong = (radius) => {
    return 3.14 * radius ** 2;
}

console.log(`arrow function radius: ${calcAreaArrow(6)}`);


// practice arrow functions

const greeting = () => 'hello, world';
console.log(greeting());

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++)
    {
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([8,56,23,56], .1));

// functions
const greetFunc = () => 'hello';

let resultOne = greet();
console.log(resultOne);

// methods
const name = 'ben';
name.toUpperCase();

// callbacks and foreach
// We can also pass a function as an argument. When we do this the result is called
// a callback function

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

// myFunc(function(value) {
//     console.log(value);
// });
// same as above
myFunc(value => {
    console.log(value);
});

let people = ['ben', 'wells', 'nick', 'david', 'austin'];



/*
first parameter is whatever the value is at the time we are iterating over in this case the 
person
second parameter is the index at the time the function is called as we are iterating
*/
people.forEach((person, index) => {
    console.log(person);
});


const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');
console.log(ul);

const peoples = ['ben', 'nick', 'wells', 'andrew', 'brian'];

let html = ``;

peoples.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;
