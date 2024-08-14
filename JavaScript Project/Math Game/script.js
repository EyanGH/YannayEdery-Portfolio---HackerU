let currentQuestion = {};
let score = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let question;
    let answer;

    switch (operation) {
        case '+':
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            question = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
        case '/':
            question = `${num1} / ${num2}`;
            answer = (num1 / num2);
            break;
    }

    currentQuestion = { question, answer };
    document.getElementById('question').innerText = question;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer == currentQuestion.answer) {
        document.getElementById('result').innerText = 'Correct!';
        score++;
    } else {
        document.getElementById('result').innerText = `Wrong! The correct answer is ${currentQuestion.answer}`;
    }
}

function nextQuestion() {
    generateQuestion();
}

window.onload = generateQuestion;
