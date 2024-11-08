// ------------ Default properties ------------ //
"use stritct"; // Hight code controls
console.clear(); // Clear default browser console code

// ------------ Variables Form ------------ //
const nomeForm = document.querySelector("input.nomeInput");
console.log(nomeForm);
const kmForm = document.querySelector("input.kmTot");
console.log(kmForm);
const ageForm = document.querySelector("input.age");
console.log(ageForm);
const selectForm = document.getElementById("inputState");
console.log(selectForm);

// ------------ Variables Input Genera / Reset ------------ //
const btnGenera = document.querySelector("button.genera");
console.log(btnGenera);
const btnReset = document.querySelector("button.reset");
console.log(btnReset);



/*************************************************
 *            Sezione: Creazione Eventi          *
 * Descrizione: In questa sezione, vengono       *
 *              creati eventi per gestire le      *
 *              interazioni dell'utente, come     *
 *              i click sui pulsanti e i dati     *
 *              inseriti nel form.                *
 *************************************************/
// ------------ Event Click On Button ------------ //
btnGenera.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(nomeForm.value);
  console.log(kmForm.value);
  console.log(selectForm.value);
}); 



