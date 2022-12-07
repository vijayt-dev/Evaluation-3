/*
4. Look at the code below, you have a for loop if you have setTimeout inside it. If log the
loop counter inside setTimeout, what will be logged?
for(var i = 0; i < 10; i++) {
setTimeout(function() {
console.log(i);
}, 10);
}
*/

for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i); // 10 10 10 10 10 10 10 10 10 10
    }, 10);
}