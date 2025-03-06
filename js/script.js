// Elementi Html 
const countdownElement = document.getElementById("countdown");
const numbersListElement = document.getElementById("numbers-list");
const answersFormElement = document.getElementById("answers-form");
const messageElement = document.getElementById("message");

const numbersListArr = [0, 0, 0, 0, 0];
// Random 
const randomNumber = () => parseInt(Math.random() * (50 - 1) + 1);
const numbersListGenerated = generateRandomNumber(numbersListArr);
generateListElement(numbersListGenerated);


//Timer
let count = 10;
const gameTimer = setInterval(countdownTimer, 1000)


//input 

answersFormElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const values = takeInput();
    const correctAnswers = checkInput(values, numbersListGenerated);
    const numberOfAnswer = correctAnswers.length;
    const correctAnswersString = correctAnswers.join(", ")
    messageElement.innerText = `Ne hai indovinato ${numberOfAnswer}. Di preciso: ${correctAnswersString}`

    console.log(values);
})


// Funzioni
function generateRandomNumber(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = randomNumber();
    }

    return arr;
}

function generateListElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        const newLi = document.createElement("li");
        newLi.textContent = arr[i];
        numbersListElement.appendChild(newLi);
    }
}

function countdownTimer() {
    if (count > 0) {
        count--;
    } else {
        clearInterval(gameTimer);
        numbersListElement.classList.add("d-none");
        answersFormElement.classList.remove("d-none");
    }
    countdownElement.innerText = count;
    return count;
}


function takeInput() {
    const inputs = document.querySelectorAll("#input-group input");
    const values = [];

    for (let i = 0; i < inputs.length; i++) {
        values.push(Number(inputs[i].value))
    }

    return values;
}


function checkInput(solutions, answers) {
    const correctAnswerArray = [];
    for (let i = 0; i < solutions.length; i++) {
        const solution = Number(solutions[i]);

        for (let x = 0; x < answers.length; x++) {
            const answer = Number(answers[x]);

            if (answer === solution) {
                correctAnswerArray.push(solution);
            }
        }
    }
    console.log(correctAnswerArray)
    return correctAnswerArray;
}