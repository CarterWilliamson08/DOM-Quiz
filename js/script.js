console.log("script.js connected!");

//Select all questions within the block
let buttons = document.querySelectorAll(".question-block button");
console.log(buttons);

//Question 1
let quesOne = document.querySelectorAll("#question-1 .answer-btn");
console.log(quesOne);


//Checks for button click


buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("button clicked");
    });
});

