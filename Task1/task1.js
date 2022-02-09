/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  output.innerHTML = "";

  const kilograms = +form[0].value;
  createCard(kilograms);
});

function createCard(kilograms) {

  const div = document.createElement("div");

  const kilo = document.createElement("h2");
  kilo.textContent = `${kilograms} kilograms is equal to:`;

  const pounds = document.createElement("p");
  pounds.textContent = `${kilograms * 2.2046} pounds`;

  const grams = document.createElement("p");
  grams.textContent = `${kilograms / 0.001} grams`;

  const ounces = document.createElement("p");
  ounces.textContent = `${kilograms * 35.274} ounces`;

  div.append(kilo, pounds, grams, ounces);
  output.append(div);
}
