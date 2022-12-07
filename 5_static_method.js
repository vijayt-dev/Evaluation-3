/*
5. Explain the Class instance method and static method with an example?
*/

/*
A static method that has a static keyword prepended to itself. Such methods cannot be accessed through instantiated objects but could be accessed through the class name.
*/

class Person {
    constructor(name){
        this.name = name;
    }
    static welcome() {
        console.log(`Hi ${this.name}`);
    }
    welcome() {
        console.log(`Hi ${this.name}`);
    }
}
const p = new Person("Kevin");
p.welcome(); // Hi Kevin
Person.welcome(); // Hi Person

