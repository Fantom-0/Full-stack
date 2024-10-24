function Person(name, age) {
    this.name = name,
    this.age = age
}

Person.prototype.talk = function () {
    console.log(this);
};

let p1 = new Person("adam", 45);
let p2 = new Person("eve", 35);

class Personclass {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    talk() {
        console.log(`Hi my name is ${this.name}`);
    }
}

let p3 = new Personclass("ayama", 37);