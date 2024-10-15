// const content = document.querySelector('p');

// // returns a DOM token list of all the different classes 
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

paragraphs.forEach(para => {
    if (para.innerText.includes('error')) {
        para.classList.add('error');
    }
    else if (para.innerText.includes('success')) {
        para.classList.add('success');
    }
})

const title = document.querySelector('.title');

title.classList.toggle('test');
