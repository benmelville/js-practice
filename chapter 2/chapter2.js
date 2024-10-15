// for loops
for (let i = 0; i < 5; i++) {
    console.log(`in loop ${i}`)
}

const names = ['ben', 'makenna', 'david', 'wells'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

const grade = 'B';

switch(grade) {
    case 'A':
        console.log('great job you got an A!');
        break;
    case 'B':
        console.log('you did alright, you got a B');
        break;
    case 'C':
        console.log('keep trying you got a C');
        break;
    case 'D':
        console.log('you are not doing well D');
        break;
    default:
        console.log('you failed F!!!');
}


// variables and block scope
const score = 30;

if (true) {
    const score = 40; // this works
    {
        const score = 70; // this works too
        console.log(score);
    }

    console.log(score);
}
console.log(score);

