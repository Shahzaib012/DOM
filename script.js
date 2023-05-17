


  let heading = document.getElementById("my");
heading.innerHTML = "Ali";


  let a = document.getElementById("myButton");
  console.log(a.textContent);

  let b =  document.getElementsByClassName("same");
  console.log(b);

  window.addEventListener('DOMContentLoaded', (event) => {
    // Get references to the elements
    const heading = document.getElementById('myHeading');
    const button = document.getElementById('myButton');
  
    // Add event listener to the button
    button.addEventListener('click', () => {
      // Change the text of the heading
      listener.textContent = 'New Text';
    });
  });



  // Get a reference to the button element
var button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Add a mouseover event listener to the button
button.addEventListener("mouseover", function() {
  console.log("Mouse over button!");
});

// Add a keydown event listener to the document
document.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
});
