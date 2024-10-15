// need to query the DOM and then can do something with them
// goes into the document and pulls the first p tag it comes across
// const para = document.querySelector('p'); // best way to grab an element from DOM (query the DOM)
// const error = document.querySelector('div.error');

// // console.log(para);
// console.log(error);
// returns a NodeList
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error')

paras.forEach(para => {
    console.log(para);
});
errors.forEach(error => {
    console.log(error);
})

console.log(paras[0]);

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
// returns an HTMLCollection, forEach does NOT work here
const errors2 = document.getElementsByClassName('error');
console.log(errors2);
console.log(errors2[1]);

// get elements by their tag name
// returns an HTML collection
const parasTagName = document.getElementsByTagName('p');
console.log(parasTagName);
console.log(parasTagName[1]);

const paraOne = document.querySelector('p');
console.log(paraOne.innerText);
paraOne.innerText = 'ninjas are awesome';

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(para => {
    console.log(para.innerText);
    para.innerText += "new text";
})

const content = document.querySelector('.content');
console.log(content.innerHTML);

content.innerHTML += '<h2>this is new h2</h2>';

const people = ['ben', 'wells', 'mario', 'luigi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})

const link = document.querySelector('a');

// get value of href
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'the net ninja website';

const message = document.querySelector('p.error');
console.log(message);
console.log(message.getAttribute('class'));

message.setAttribute('class', 'success');
console.log(message);

message.setAttribute('style', 'color: green')

// this overwrites the original style of the html
const titles = document.querySelector('h3');
// titles.setAttribute('style', 'margin: 50px;')
console.log(titles.style);
console.log(titles.style.color);
// does not overwrite the style
titles.style.backgroundColor = 'blue';
titles.style.color = 'crimson';

titles.style.fontSize = '45px';



