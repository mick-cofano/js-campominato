// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati (tadaaa!)
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// ragionamento svolgimento
  // generazione di 16 numeri tra 1 e 100 (random) ognuno diverso dall'altro
  // richiesta all'utente un numero tra 1 e 100
    // SE il numero è presente in quei 16 L'UTENTE HA PERSO/FINE DEL GIOCO
    // SE il numero non è presente L'UTENTE CONTINUA A GIOCARE
      // L'UTENTE continua a giocare fino a quando non becca un numero di quei 16 random (perdente)
      // o fino a quando non arriva al tentativo n.84, di conseguenza vince (vincente)


// funzione che genera i numeri randomici
// function genNumeri(n, min, max) {
//     var mine = [];
//
//     // ripeto 16 volte => genero 16 numeri
//     for (var i = 0; i < n; i++) {
//         // utilizzare il ciclo per verificare che i numeri siano diversi
//         // se è un numero gia uscito ne genera un'altro
//         do {
//             var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
//         } while (mine.includes(numeroRandom));
//
//         mine.push(numeroRandom); //questo comando inserisce il numero nell'array che contiene le "mine"
//     }
//     return mine;
// }
//
//
// // output in console.log per generazione numeri random
//
// var numeriComputer = genNumeri(16, 1, 100);
// console.log(numeriComputer);




// array del generatore di numeri random (mine)
var numeriComputer = genNumeri(16, 1, 100);
console.log(numeriComputer);

// funzione che genera i numeri randomici
function genNumeri(n, min, max) {
    var mina = [];

    // ripeto 16 volte => genero 16 numeri
    for (var i = 0; i < n; i++) {
      // utilizzare il ciclo per verificare che i numeri siano diversi
      // se è un numero gia uscito ne genera un'altro

      do {
          var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (mina.includes(numeroRandom));

      mina.push(numeroRandom); //questo comando inserisce il numero nell'array che contiene le "mine"
    }

  return mina;
}



// array delle giocate dell'utente
var numeriConsentiti = [];
var roundVinto = 0;


// ciclo per vedere se il giocatore vince o perde
do {
    // chiedo all'utente un numero
    var numeroSceltoUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
    // e si verifica e rispetta tutte le regole

    // PRIMA REGOLA: deve essere un numero da 1 a 100 e non deve
    // essere ripetuto più volte lo stesso numero
    if(isValid(numeroSceltoUtente) == true) {

        // verificare che non sia uno dei numeri randomici (mina)
        if(isMina(numeroSceltoUtente, numeriComputer) == true) {
            // se l'utente ha preso uno dei 16 num (mina), allora:
            alert('Purtroppo hai perso! Riprova');
        } else if (numeriConsentiti.includes(numeroSceltoUtente) == false) {
            // verifica che non sia gia stato inserito il numero
            numeriConsentiti.push(numeroSceltoUtente);
            roundVinto = roundVinto + 1;
        } else {
          // se è stato gia inserito, allora:
            alert('Hey, hai già inserito questo numero..');
        }

    } else {
      // se è stato inserito un numero tra 0 o > 100, oppure un num decimale o una lettera, allora:
        alert('HAI INSERITO UN NUMERO NON VALIDO!');
    }

} while (numeriConsentiti.length != 84 && isMina(numeroSceltoUtente, numeriComputer) == false);

if(numeriConsentiti.length == 84) {
  // se il giocatore riesce a non prendere nessuna mina, allora:
    alert('Congratulazioni!! Hai vinto!!!');
} else {
  // altrimenti, se prende una mina.. Alert del numero giocate prima di perdere
    alert('Hai perso dopo: ' + roundVinto);
}


// funzione che verifica se il numero scelto è una mina

// se il numero inserito dal giocatore è nell'array delle mine, allora restituisce true e segnala
// altrimenti se inserisce un numero (valido), allora restituisce false e continua a giocare
function isMina(numero, mina) {
    var trovato = false;
    for (var i = 0; i < mina.length && trovato == false; i++) {
        if(mina[i] == numero) {
            trovato = true;
        }
    }
    return trovato;
}


// funzione per validare il numero dell'utente
// se il numero del giocatore è compreso tra l'1 e il 100 allora è valido
// altrimenti restituisce false ed esce l'alert
function isValid(numero) {
    if(numero > 0 && numero <= 100 && isNaN(numero) == false) {
        return true;
    } else {
        return false;
    }
}
