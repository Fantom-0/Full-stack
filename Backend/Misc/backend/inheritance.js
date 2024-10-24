class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi im ${this.name}`);
    }
}

class Students extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }

}

let Stu1 = new Students("kevin", 21, 98);


class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

let T1 = new Teacher("Gajre", 54, "marathi");