// vedere se una parola è palindroma

var parola = prompt('inserisci una parola');
var parolaReverse= "oaic";

for (var i = parola.length - 1; i >= 0; i--){
  parolaReverse = parolaReverse + parola[i];
  // parolaReverse += parola[i]; versione contratta
  // console.log(parolaReverse);
}

if (parola == parolaReverse){
  alert('la parola è palindroma');
}
else{
  alert('la parola non è palindroma')
}
