
/**
 * Example 1: Here the output is 1, 3, 2. Even though the timeout time is 0 seconds, setTimeout auto calls web
 * api which in turn gets added to the callback queue and then run at the end when third() finishes running.
 * This is done so setTimeout does not block the rest of the code from running.
 */
function first() {
    console.log(1);
}

function second() {
    setTimeout(() => {
        console.log(2);
    }, 0)
}

function third() {
    console.log(3);
}

// first();
// second();
// third();

/**
 * CALLBACKS
 */

function message() {
    console.log("hello there");
}

function logger(message) {
    message();
}

logger(message);


function callbackFirst() {
    console.log(1);
}

function callbackSecond(callback) {
    setTimeout(() => {
        console.log(2);
        callback()
    }, 0)
}

function callbackThird() {
    console.log(3);
}

callbackFirst();
callbackSecond(callbackThird);


/**
 * CALLBACK BAD
 */

function callbackHell() {
    setTimeout(() => {
        const data = { user: "ben" }
        console.log(data)
        setTimeout(() => {
            console.log("data has been updated!")
        }, 1000)
    }, 500)
}

callbackHell();


/**
 * PROMISES
 */

const promise = new Promise((resolve, reject) => {
    let error = false
    !error ? resolve({user: 'benjamin!' }) : reject('uh oh server is down!')
})

promise.then(data => {
    return data
})
.then(user => {
    console.log(user)
})
.catch(error => {
    console.error(error)
})


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('this is my data from a server'), 2000)
})

promise1.then((res) => {
    console.log(res)
})

fetch('https://jsonplaceholder.typicode.com/todos/1').then(data => {
    return data.json()
})
.then(jsonData => {
    console.log(jsonData)
})
.catch(error => {
    console.log('error! data not fetched!')
})
.finally(() => {
    console.log('this is done NO MATTER WHAT HAPPENS')
})


async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('something went wrong')
    }
}

getTodos()