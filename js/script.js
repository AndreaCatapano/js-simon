// Elementi Html 

const countdownElement = document.getElementById("countdown");
const numbersListElement = document.getElementById("numbers-list");
const answersFormElement = document.getElementById("answers-form");


setInterval(function(){
    numbersListElement.classList.add("d-none")
    answersFormElement.classList.remove("d-none")
}, 10000)