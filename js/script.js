console.log("script.js connected!");

const answers = [];
const buttons = document.querySelectorAll(".question-block button");
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const questionDiv = button.closest('.question-block');
        const questionIndex = parseInt(questionDiv.getAttribute('data-question'));
        answers[questionIndex] = button.getAttribute('data-answer');

        questionDiv.computedStyleMap.display = 'none';

        const nextQuestion = document.querySelector(`.question[data-question="${questionIndex + 1}"]`);
        if(nextQuestion) {
            nextQuestion.style.display = 'block';
        }else {
            showResult();
        };
    });
});

function showResult() {
    const counts = {Dragon: 0, Unicorn: 0, Phoenix: 0, Mermaid: 0};
    answers.forEach(ans => counts[ans]++);

    let max = 0;
    let result = '';
    for (let creature in counts) {
        if (counts[creature] > max) {
            max = counts[creature];
            result = creature;
        }
    }

    let description = '';
    switch(result) {
        case 'Dragon':
            description = "You’re fierce, confident, and unstoppable!";
            break;
        case 'Unicorn':
            description = "You’re gentle, kind, and bring magic to others’ lives.";
            break;
        case 'Phoenix':
            description = "You’re resilient, full of energy, and always rise from challenges.";
            break;
        case 'Mermaid':
            description = "You’re intuitive, imaginative, and flow with life’s mysteries.";
            break;
  }

  document.getElementById('result').innerHTML = `You are a <strong>${result}</strong>!<br>${description}`;
}

