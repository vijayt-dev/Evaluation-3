/*
1. What is the scope of ‘this’ inside the Arrow function? Explain with an example?
*/

/*
Arrow function does not have a this, arguments or super it doesn't have its own context. It inherit the window global.
*/

const a = 10;
let print = (a) => {
    console.log(a); // 10
    console.log(this); // Window object
};

print(a);

const person = {
    id: 1,
    fullName: "John",
    display: () => {
        console.log(this.id,this.fullName); // It also point to window object // undefined undefined
    }
};
person.display(person);