/* 
    Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (vedi grafica allegata). 
*/

// variabili
const boxes = document.querySelector('.boxes');

// ciclo da 1 a 100
for (let i = 1; i <= 100; i++){

    let className;
    let text;

    //  condizione multipli di 3 e 5
    if(i % 3 == 0 && i % 5 == 0){
        className = 'box-red';
        text = 'FizzBuzz';
    }

    // condizione multipli di 5
    else if(i % 5 == 0){
        className = 'box-yellow';
        text = 'Buzz';
    }

    // condizione multipli di 3
    else if(i % 3 == 0){
        className = 'box-green';
        text = 'Fizz';
    }

    else{
        className = 'box-general';
        text = i;
    }
    boxes.innerHTML += `<div class="box ${className}">${text}</div>`;
}