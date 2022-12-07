/*
10. Explain the ‘super’ and ‘constructor’ keywords inside the Class with an example?
*/

/*
    The super keyword is used to call the parent constructor.
    A constructor is a function that creates and initializes an object instance of a class. A constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.
*/

class Person {
    constructor(name){
        this.name = name;
    }
    welcome() {
        console.log(`Hi ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,studentId){
        super(name);
        this.studentId = studentId;
    }
    welcome() {
        console.log(`Hi ${this.name} ID ${this.studentId}`);
    }
}

const kevin = new Student("Kevin","A12");
kevin.welcome();