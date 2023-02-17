/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
  this.sum = function () {
    return this.number1 + this.number2;
  };
  this.subtraction = function () {
    return this.number1 - this.number2;
  };
  this.multiplication = function () {
    return this.number1 * this.number2;
  };
  this.division = function () {
    return this.number1 / this.number2;
  };
}

const newNumbers = new Calculator(10, 5);
