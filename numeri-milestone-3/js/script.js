// MILESTONE 3
// Coloriamo i numeri pari 
// in rosso e i dispari in verde nell'html

const numbersContainer = document.querySelector('.numbers-container');

for(let i = 0; i <= 1000; i++) {
    // Assegniamo ad una variabile il nome della classe per il colore
    // Se è pari .even, altrimenti .odd
    let evenOddClassName;
    if(i % 2 === 0) {
        evenOddClassName = 'even';
    } else {
        evenOddClassName = 'odd';
    }

    // Creare dei div box
    const newBox = `<div class="box ${evenOddClassName}">${i}</div>`;

    // Li concateniamo a numbersContainer
    numbersContainer.innerHTML += newBox;
}