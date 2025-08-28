
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: It selects a single element by ID, which must be unique within the HTML file. It reuters a single element. 

getElementsByClassName: It selects all the elements having the same class name. It returns an HTML collection, which is an array-like object. To get each element from the HTML collection,
we have to loop through the collection. The collection updates automatically if there are any changes in the DOM.

querySelector: From all the elements that have the same CSS selector, it selects the first one. It returns a single element.

querySelectorAll:  It selects all the elements that have the same CSS selector. It returns a nodeList, which is an array-like object. If the DOM changes, it doesn't get updated. 


2. How do you create and insert a new element into the DOM?

// for innerText
const newElement = document.createElement("h1"); 
newElement.innerText = "Create new text";
document.getElementById("id").appendChild(newElement);

//for innerHTML
const newElement = document.createElement("div"); 
newElement.innerHTML = `<p>Create <b>New</b>Text</p>`;
document.getElementById("id").appendChild(newElement);


3. What is Event Bubbling and how does it work?

In JavaScript, Event bubbling is a behaviour where an event is triggered on the child element, and it bubbles upward through its parent elements in the DOM.

Working Mechanism:
The event initiates on an element when we click on the targeted element. For example- 
<button> click <button>

Then, the event handler is running on that targeted element, and the event propagates upward through all the ancestor elements. 
For example: <button> then <div> then <body> then <html> then document

If there is any event listener for an element at each level, it will occur.

If we want to stop the propagation of the event, we can use event.stopPropagation()


4. What is Event Delegation in JavaScript? Why is it useful?

In JavaScript, Event delegation is a mechanism where an event listener is added to the parent element, and it handles all events for its child elements. There is no need to add an individual event listener
to the child elements. The responsibility is delegated to the parent listener.

Benefits:
Instead of adding an event listener for each child element, we can use one in the parent element. This helps save memory and reduce execution time.
Dynamically handling the contents means new elements can be added or removed after the page loads.
Easy for maintenance.


5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault(): 
1. We use preventDefault() when we want to stop the browser's default behaviour of that particular event. 
2. Event bubbles won't be affected.
3. For example, when we click the submit button on the form, the page reloads. It is the default behaviour of the browser. But if we want the browser not to do its regular action( stop page reloads ), 
in that case, we will use preventDefault()

stopPropagation(): 
1. It stops the current event from further propagation in the bubbling or capturing stages of the DOM. 
2. Does not stop the browser's default behaviour.
3. For example, if there is a button inside a div, and the div is inside the body. When we click on the button, the click event first occurs on the button, then it bubbles up to the div, and then body. 
But if we add the event.stopPropagation() with the button’s click event, in that case button’s code will run, and the div and body’s code will not run.



