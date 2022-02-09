/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.getElementById("output");

window.onload = () => {
  fetchCarsList();
};

function fetchCarsList() {
  fetch("cars.json")
    .then((res) => res.json())
    .then((data) => {
      createCarsCards(data);
    })
    .catch((err) => console.log(err));
}

function createCarsCards(data) {
  data.forEach((car) => {
    const div = document.createElement("div");
    const brand = document.createElement("h3");
    brand.textContent = car.brand;
    brand.style.fontSize = '26px';
    div.append(brand);

    const br = document.createElement('br');
    div.append(br);

    const ul = document.createElement("ul");
    car.models.forEach((model) => {
      
      const li = document.createElement("li");
      li.textContent = model;
      ul.append(li);
    });

    div.append(ul);
    output.append(div);
    
  });
}
