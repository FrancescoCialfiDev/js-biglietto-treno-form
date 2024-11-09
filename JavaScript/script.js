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

/**************************************************
 *            Sezione: Creazione Eventi           *
 * Descrizione: In questa sezione, vengono        *
 *              creati eventi per gestire le      *
 *              interazioni dell'utente, come     *
 *              i click sui pulsanti e i dati     *
 *              inseriti nel form.                *
 *************************************************/

// ------------ Event Click On Button ------------ //
btnGenera.addEventListener("click", function (event) {
  event.preventDefault();
  const biglietto = document.getElementById("biglietto");
  biglietto.innerHTML += `
<h4 class="fw-bold">DETTAGLIO PASSEGGERI</h4>
      <div class="user-info d-flex row h-75">
        <div class="immagine col-2">
          <img src="" alt="" />
        </div>
        <div class="items col-10 d-flex justify-content-around">
          <div class="item">
            <h5>Offerta</h5>
            <p class="offerta">Biglietto standard</p>
          </div>
          <div class="item">
            <h5>Carrozza</h5>
            <p>5</p>
          </div>
          <div class="item">
            <h5>Codice CP</h5>
            <p>92911</p>
          </div>
          <div class="item">
            <h5>Costo Biglietto</h5>
            <p class="prezzo"></p>
          </div>
        </div>
      </div>
      log
`;

  const offertaPiano = document.querySelector(".offerta");
  if (selectForm.value === "minorenne") {
    offertaPiano.textContent = "Junior Plane";
  } else if (selectForm.value === "senior") {
    offertaPiano.textContent = "Senior Plane";
  } else {
    offertaPiano.textContent = "Standard Plane";
  }

  const htmlPrezzo = document.querySelector(".prezzo");
  htmlPrezzo.innerHTML = calcoloPrezzo();
});

// ------------ FUNZIONE CALCOLO PREZZO ------------ //
function calcoloPrezzo() {
  const tariffaStandard = kmForm.value * 0.21;
  let prezzo;
  if (selectForm.value === "minorenne") {
    prezzo = tariffaStandard - (tariffaStandard * 20) / 100;
    console.log(`Il prezzo totale del tuo biglietto è ${prezzo.toFixed(2)}"€"`);
  } else if (selectForm.value === "senior") {
    prezzo = tariffaStandard - (tariffaStandard * 40) / 100;
    console.log(`Il prezzo totale del tuo biglietto è ${prezzo.toFixed(2)}"€"`);
  } else {
    prezzo = tariffaStandard;
    console.log(`Il prezzo totale del tuo biglietto è ${prezzo.toFixed(2)}"€"`);
  }
  return parseFloat(prezzo).toFixed(2) + "€";
}

// ------------ Creiamo un elementi html per mezzo di JS ------------ //

// console.log(nomeForm.value);
// console.log(kmForm.value);
// console.log(selectForm.value);
// console.log(biglietto);
