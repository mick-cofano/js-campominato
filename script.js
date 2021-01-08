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
