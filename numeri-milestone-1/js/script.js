// MILESTONE 1
// 1- Scriviamo in console tutti i numeri 
// da 0 a 1000 specificando 
// se ogni numero è pari o dispari

for(let i = 0; i <= 1000; i++) {
    let evenOrOdd;
    if(i % 2 === 0) {
        evenOrOdd = 'pari';
    } else {
        evenOrOdd = 'dispari';
    }

    console.log(i + ' ' + evenOrOdd);
}
