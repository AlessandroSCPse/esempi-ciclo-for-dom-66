const mainList = document.querySelector('.list');

// mainList.innerHTML += `<li>Elemento 1</li>`;
// mainList.innerHTML += `<li>Elemento 2</li>`;
// mainList.innerHTML += `<li>Elemento 3</li>`;
// mainList.innerHTML += `<li>Elemento 4</li>`;

// for(let i = 1; i <= 10; i++) {
//     const newLi = document.createElement('li');
//     newLi.innerHTML = `Elemento ${i}`;
//     newLi.classList.add('mia-classe');
//     mainList.append(newLi);
// }

for(let i = 1; i <= 10; i++) {
    const newLi = `
    <li class="mia-classe">
        Elemento ${i}
    </li>
    `;
    mainList.innerHTML += newLi;
}