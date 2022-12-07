/*
    9. Create a custom event listener and explain?
*/

/*
    Events are functions executed at the time when a specific action occurs.
    Custom event can attach extra details of the event as object
*/

const mousePosition = {
    detail: {
        x: 12,
        y: 123
    }
};

const mouseEvent = new CustomEvent("mousePosition",mousePosition);

document.addEventListener("mousePosition", function(event){
    console.log(event); // CustomEvent {isTrusted: false, detail: {…}, type: 'mousePosition', target: document, currentTarget: document, …}
});
document.dispatchEvent(mouseEvent);