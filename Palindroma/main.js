//* chiedere all'utente di inserire una parola
const userWord = prompt("Inserisci una parola");
//* controllo sui numeri
// while (!isNaN(userWord)) {
//   alert("I numeri non sono accettati, inserisci una parola");
//   userWord = prompt("Inserisci una parola");
// }

//* creiamo un contenitore per la parola reverse
let reverseWord = "";

//* creiamo un ciclo che aggiunga le lettere della parola in ordine decrescente
for (let i = userWord.length - 1; i >= 0; i--) {
  const letter = userWord[i];
  console.log(letter);

  reverseWord += letter;
}

console.log(reverseWord);

function palindromWord(reverseWord) {
  if (reverseWord == userWord) {
    alert("la parola è palindroma");
  } else {
    alert("la parola non è palindroma");
  }
  return reverseWord;
}
