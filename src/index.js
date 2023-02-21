import validator from './validator.js';


function validarDatos() {

  const number = document.getElementById("number").value;
  const name = document.getElementById("name").value;
  console.log(number, name);
  const dataRecorded = document.getElementById("dataRecorded");
  const numberMaskify = validator.maskify(number);
  dataRecorded.innerText = "Hola " + name + " su número de tarjeta es: " + numberMaskify;

}

function limitNumber() {
  const input = document.getElementById("number");
  const number = input.value;
  input.value = validator.limit(number);

}

window.limit = limitNumber;
window.validar = validarDatos;

//console.log(validator);
