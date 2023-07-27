//* chiedere all'utente di inserire una parola
let userWord = prompt("Inserisci una parola");
//* controllo sui numeri
while (!isNaN(userWord)) {
  alert("I numeri non sono accettati, inserisci una parola");
  userWord = prompt("Inserisci una parola");
}

//* creiamo un contenitore per la parola reverse
let result = isPalindrome(userWord);

//* stampiamo se è palindroma oppure no
if (result) {
  console.log("è palindroma");
} else {
  console.log("non è palindroma");
}

//* creiamo una funzione che aggiunga le lettere della parola in ordine decrescente
function isPalindrome(parola) {
  let reverseWord = "";
  for (let i = parola.length - 1; i >= 0; i--) {
    const letter = parola[i];

    reverseWord += letter;
  }
  let result = false;
  if (reverseWord == parola) {
    result = true;
  }

  return result;
}
