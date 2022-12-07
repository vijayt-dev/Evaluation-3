/*
3. What is the difference between when classic and arrow functions are used as event
callbacks?
*/

/*
    In classic function, the this keyword is act based on the context in which it is called.
    In arrow function,  The context refers to the global which is window object
*/

document.addEventListener("mousemove",function(){
    console.log(this); // document object
});

document.addEventListener("mousemove",() => {
    console.log(this); // window object
});


