// object literals

// const blogs = [
//     { title: 'spacex launches', likes: 80 },
//     { title: 'orlando', likes: 45}
// ]

let user = {
    name: 'ben',
    age: 23,
    email: 'benmelville@test.com',
    blogs: [
        { title: 'spacex launches', likes: 80 },
        { title: 'orlando', likes: 45}
    ],

    login() {
        console.log('the user logged in');
    },

    logout() {
        console.log('the user logged out');
    },
    /**
     * NOTE
     * We use a regular function to define this function. We have not used an arrow function. 
     * This was intentional because arrow functions work differently with the this keyword. 
     * If this was an arrow function it would NOT work.
     * When we use a normal function as a method and invoke that method, javascript sets the value of the this 
     * keyword to the object that the method was used on
     * When using an arrow function the this keyword is not set. 
    */
    logBlogs() {
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    },
    logMe() {
        console.log(this);
    }

};

console.log(user);
console.log(user.name);

user.age = 56;
console.log(user.age);

// can use . or [] to access members of object
console.log(user['name']);

console.log(typeof(user));

user.login();
user.logout();
user.logBlogs();

// global object in js which is the window object
console.log(this);
user.logMe();


// Math object

console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));

// random numbers
const random = Math.random();

// random number between 0 and 50
console.log(Math.round(random * 3));

/**
 * primitives stored on stack
 * objects stored on heap
 * 
 * Heap has more storage available, but it is a bit slower
 * 
 * When we store a primitive value in a variable, it adds that value to the stack and it locks the variable name
 * as an accessor to that value.
 * 
 * When we store a reference type to a variable it adds the object to the heap, and then it adds a pointer to that 
 * object on the stack
 */

// primitives
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`); // both 50

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`); // scoreOne: 100, scoreTwo: 50. These do not change

// reference types
const userOne = { name: 'ben', age: 90 };
// Copy is shallow, just copies pointer to userOne object on the stack
const userTwo = userOne;

console.log(`userOne name: ${userOne.name} userTwo name: ${userTwo.name}`) // ben for both

userTwo.name = 'wells';

console.log(`userOne name: ${userOne.name} userTwo name: ${userTwo.name}`) // wells for both

