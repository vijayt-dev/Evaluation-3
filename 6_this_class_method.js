/*
6. How does “this” works inside the Class method with an example?
*/

/*
When an object is created using the new keyword the this refers to the current object of the class
*/

class Person {
    constructor(name){
        this.name = name;
    }
    welcome() {
        console.log(`Hi ${this.name}`);
    }
}

const kevin = new Person("Kevin");
kevin.welcome();