const posts = [
    { title: 'post one', body: 'this is post one'},
    { title: 'post two', body: 'this is post two'}
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        console.log(output);
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            !error ? resolve() : reject('ERROR: Something went wrong') 

        }, 2000)
    });
}

// createPost({title: 'post three', body: 'this is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

/**
 * Promise.all
 */

// const promise1 = Promise.resolve("hello world");
// const promise3 = 10;
// const promise2 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, "goodbye"));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values));



/**
 * Async / Await
 */

async function init() {

    console.log('retriving posts...')
    await createPost({title: 'post 5', body: 'this is another post 5 i guess'});
    console.log('getting posts...')
    getPosts();
    console.log('posts retrieved...')
}

// init()

/**
 * Aysnc / Await / Fetch
 */

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();
