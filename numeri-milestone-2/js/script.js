// MILESTONE 2
// Scriviamo nell'html 
// tutti i numeri da 0 a 1000

const numbersContainer = document.querySelector('.numbers-container');

for(let i = 0; i <= 1000; i++) {
    // Creare dei div box
    const newBox = `<div class="box">${i}</div>`;

    // Li concateniamo a numbersContainer
    numbersContainer.innerHTML += newBox;
}