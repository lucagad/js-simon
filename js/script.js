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

const numberBox = document.querySelector('.number_random');
const numberInsertBox = document.querySelector('.number_insert');

// Ciclo per estrarre 5 numeri random
for (let i = 0; i < numberOfNumber; i++){

  winningNumbers[i] = getRandomNumber(minNumber,maxNumber);
  numberBox.innerHTML += `<span class=" mx-1 fw-bold"> ${winningNumbers[i]} </span>`;

} 

console.log(winningNumbers);

// Ciclo per far inserire 5 numeri all'utente
for (let i = 0; i < numberOfNumber; i++){

  insertNumbers[i] = parseInt(prompt(`Inserisci uno dei ${numberOfNumber} numeri`));

  if(winningNumbers.includes(insertNumbers[i])){

    numberInsertBox.innerHTML += `<span class=" mx-1 fw-bold correct"> ${insertNumbers[i]} </span>`;

  } else {
    numberInsertBox.innerHTML += `<span class=" mx-1 fw-bold wrong"> ${insertNumbers[i]} </span>`;

  }

  
} 



// FUNCTIONS

function getRandomNumber(min, max){
	return  Math.floor(Math.random() * (max - min +1) + min );
}