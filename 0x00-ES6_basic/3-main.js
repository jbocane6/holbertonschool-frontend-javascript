/* eslint-disable no-param-reassign */
function sumaDeValores(initialNumber, numeroDos, numeroTres) {
  if (numeroDos === undefined) {
    numeroDos = 89;
  }

  if (numeroTres === undefined) {
    numeroTres = 19;
  }
  return initialNumber + numeroDos + numeroTres;
}

console.log(sumaDeValores(34));
console.log(sumaDeValores(34, 3));
console.log(sumaDeValores(34, 3, 4));
