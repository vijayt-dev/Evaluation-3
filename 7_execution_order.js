/*
7. What is the execution order of the following block of code?
const ex1 = () => console.log(ex1)
const ex2 = () => console.log(ex2)
const ex = () => {
console.log(ex)
setTimeout(ex1, 1000)
ex2()
}
ex()

*/
const ex1 = () => console.log(ex1);
const ex2 = () => console.log(ex2);
const ex = () => {
    console.log(ex);
    setTimeout(ex1, 1000);
    ex2();
};
ex();

/*
Output

[Function: ex]
[Function: ex2]
[Function: ex1]
*/

