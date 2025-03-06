// Elementi Html 

const countdownElement = document.getElementById("countdown");
const numbersListElement = document.getElementById("numbers-list");
const answersFormElement = document.getElementById("answers-form");

const numbersListArr = [0, 0, 0, 0, 0];

numbersListElement.textContent
// Random 
const randomNumber = () =>  parseInt(Math.random() * (50 - 1) + 1);
const numbersListGenerated = generateRandomNumber(numbersListArr);
generateListElement(numbersListGenerated);


//Timer

setInterval(function(){
    numbersListElement.classList.add("d-none")
    answersFormElement.classList.remove("d-none")
}, 10000)




// Funzioni
function generateRandomNumber(arr) {

    for (let i = 0; i < arr.length; i++){
        arr[i] = randomNumber();
    }

   return arr;
}

function generateListElement (arr) {
    for(let i = 0; i < arr.length; i++){
        const newLi = document.createElement("li");
        newLi.textContent = arr[i];
        numbersListElement.appendChild(newLi);
    }
}

