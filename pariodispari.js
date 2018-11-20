 // chiedere all'utente se vuole fare pari o dispari
function numeroRandom (min, max){
  var numeroRandom = Math.floor (Math.random() = (max - min + 1) + min);
  return numeroRandom;
}

function sommaNumeri (numero1, numero2){
  var somma = numero1 + numero2;
  return somma;
}
// dichiarazione che stabilisce se un numero è pari o dispari. Ritorna un booleano
function pari(numero){
  var result = false;
  var pari= numero%2;

  if (pari == 0){
    result= true;
  }
  return result;
}

 var dichiarazione = prompt('dichiara pari o dispari');
 console.log(dichiarazione);

 var numeroUtente = parseint(prompt('inserisci un numero da 1 a 5'));

 var numeroComputer = numeroRandom(1, 5);
 console.log(numeroComputer);

 var sommaNumeriInseriti = sommaNumeri(numeroUtente, numeroComputer);
 console.log(sommaNumeriInseriti);

 var isPari = pari(sommaNumeriInseriti);
 console.log(isPari);

var risultatoGioco = 'Ha vinto il Computer';  //defult

 if (dichiarazione == 'Pari' && isPari){
   if(isPari){
     risultatoGioco = 'Hai vinto';
     console.log(risultatoGioco);
   }
 }
 if (dichiarazione == 'Dispari' && !isPari){
   risultatoGioco = 'Hai vinto';
   console.log(risultatoGioco);
 }
