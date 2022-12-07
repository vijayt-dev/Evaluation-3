/*
8. Explain the event loop with an example?
*/

/*
Event loop monitor the call stack and the callback queue. If the call stack is empty, the event loop will take the event from the queue and push it to the call stack.
*/

console.log("Start");
setTimeout(function(){
    console.log("Callback Function");
});
console.log("End");

/*
Output

Start
End
Callback Function
*/