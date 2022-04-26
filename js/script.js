// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.

// Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Quantità di numeri da estrarre
const numberOfNumber = 5;

// Costanti per impostare il range di estrazione dei numeri
const minNumber = 0;
const maxNumber = 10;

// Array dei numeri vincenti ed dei numeri inseriti dall'utente
let winningNumbers = [];
let insertNumbers = [];

let played = false;

const numberBox = document.querySelector('.number_random');
const numberInsertBox = document.querySelector('.number_insert');
const btnStart = document.querySelector('.btnStart');

btnStart.addEventListener('click', startGame);

// FUNCTIONS

function startGame(){

  if(played){
    winningNumbers = [];
    insertNumbers = [];
    numberBox.innerHTML = "";
    numberInsertBox.innerHTML = "";
  }

  document.querySelector('.main_bottom').classList.remove('d-none');
  document.querySelector('.main_bottom').classList.add('d-flex');

  randomNumber(minNumber,maxNumber);
  setTimeout(insertUser, 5000);

  played = true;
}

function randomNumber(minN,maxN){
  // Ciclo per estrarre 5 numeri random
  for (let i = 0; i < numberOfNumber; i++){

    winningNumbers[i] = getRandomNumber(minN,maxN);
    numberBox.innerHTML += `<span class=" mx-1 fw-bold"> ${winningNumbers[i]} </span>`;

  }

}

function insertUser(){
  numberBox.classList.add('hide');
  // Ciclo per far inserire 5 numeri all'utente
  for (let i = 0; i < numberOfNumber; i++){

    insertNumbers[i] = parseInt(prompt(`Inserisci uno dei ${numberOfNumber} numeri`));

    if(winningNumbers.includes(insertNumbers[i])){
      numberInsertBox.innerHTML += `<span class=" mx-1 fw-bold correct"> ${insertNumbers[i]} </span>`;

    } else {
      numberInsertBox.innerHTML += `<span class=" mx-1 fw-bold wrong"> ${insertNumbers[i]} </span>`;
    }

  }
  numberBox.classList.remove('hide');

}

function getRandomNumber(min, max){
	return  Math.floor(Math.random() * (max - min +1) + min );
}