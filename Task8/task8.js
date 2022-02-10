/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(numb1, numb2) {
    this.numb1 = numb1;
    this.numb2 = numb2;

    this.sum = function() {
        return numb1 + numb2;
    }

    this.subtraction = function() {
        return numb1 - numb2;
    }

    this.multiplication = function() {
        return numb1 * numb2;
    }

    this.division = function() {
        if(numb2 != 0){
        return +(numb1 / numb2).toFixed(2);
        }else{
            alert(`Division by ${numb2} is not possible`);
        }
    }
}

const action = new Calculator(8, 5);

console.log(action.sum());
console.log(action.subtraction());
console.log(action.multiplication());
console.log(action.division());
