/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const button = document.getElementById("btn__element");

const output = document.getElementById("btn__state");

let counter = 0;

button.addEventListener("click", () => {
  counter++;
  output.textContent = counter;
  if(counter >= 100) {
    alert(`Please STOP clicking this button!`)
    counter = 0;
    output.textContent = counter;
  }
});
