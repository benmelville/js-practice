console.log(typeof []) // arrays are objects

class Person {

    _name;
    _age;
    _job;

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    getName() {
        return this._name;
    }

    getAge() {
        return this._age;
    }

    setJob(job) {
        this._job = job;
    }
}

class House { 
    #address;
    #price;
    #residents;

    constructor(address, price, residents)
    {
        this.#address = address;
        this.#price = price;
        this.#residents = residents;
    }

    getAddress() {
        return this.#address;
    }

    getPrice() {
        return this.#price;
    }

    getResidents() {
        return this.#residents;
    }

    addResident(resident) {
        this.#residents.push(resident);
    }
}

const jack = new Person("jack", 23);
console.log("logging", jack.getName());
console.log(jack.getName());

const person2 = new Person("janet", "60");
console.log(person2);
console.log(person2.getAge());

let david = new Person("david", 89);
let doug = new Person("doug", 45);

let house = new House("4567 lake road", 500000, [david, doug]);
console.log(house);
console.log(house.getResidents());
house.addResident(new Person("mike", 78));
console.log(house.getResidents());

david.setJob("nasa");

console.log(david);

class Programmer extends Person {
    constructor(name, age, company, salary, language)
    {
        super(name, age)
        this.company = company
        this.salary = salary
        this.language = language
    }

    sayHi() {
        console.log(`hello I am a programmer. my name is ${this.getName()}`);
    }
}

class Doctor extends Person {
    constructor(name, age, company, salary, specialty)
    {
        super(name, age)
        this.company = company
        this.salary = salary
        this.specialty = this.specialty
    }

    sayHi() {
        console.log(`hello I am a programmer. my name is ${this.getName()}`);
    }
}


let programmer = new Programmer("nick", 23, "apple", 50000, "python");
programmer.sayHi();

