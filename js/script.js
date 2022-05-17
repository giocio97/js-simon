let button = document.querySelector (`button`);
let numeriUtente = document.getElementById ("numeri-utente");
let numeriDigitati = document.querySelector("input");
numeriDigitativalore = numeriDigitati.value;
console.log(numeriDigitativalore);
let buttonInvia = document.getElementById ("invia");
var seconds = 30;

// Visualizzare in pagina 5 numeri casuali.
let myArr = [];
let memoryN = document.getElementById ("numeri-mem");

button.addEventListener("click",

() => {while (myArr.length < 5 ){
    let randNum = Math.floor (Math.random() * 100) + 1;
        
        if (!myArr.includes(randNum )){
            myArr.push (randNum);
        }


}
memoryN.append (myArr);


console.log(myArr);

})

//  parte un timer di 30 secondi.
const cleaner = setInterval(() => {
    memoryN.innerHTML = "";
},1 * 1000);



// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
const userNum = setInterval(() => {
    arrUser = [];
    numeriUtente.classList.remove ("display-numeri");
    arrUser.push(numeriDigitativalore );
    console.log(arrUser);
}, seconds *  1000);




// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// confrontare i due array e inserire le condizioni per dire se sono presenti gli stessi numeri

