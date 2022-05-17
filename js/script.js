var seconds = 30;
// Visualizzare in pagina 5 numeri casuali.
let myArr = [];
let memoryN = document.getElementById ("numeri-mem");




while (myArr.length < 5 ){
    let randNum = Math.floor (Math.random() * 100) + 1;
        
        if (!myArr.includes(randNum )){
            myArr.push (randNum);
        }


}
memoryN.append (myArr);


console.log(myArr);

//  parte un timer di 30 secondi.
const cleaner = setInterval(() => {
    memoryN.innerHTML = "";
},seconds * 1000);


// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


