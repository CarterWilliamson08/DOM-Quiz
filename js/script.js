console.log("script.js connected!");

//Question 1

let buttons = document.querySelectorAll("#question-1 button");
console.log(buttons);

//Checks for button click
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("button clicked");
    });
});

