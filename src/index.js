import validator from './validator.js';


function validarDatos(event) {
  event.preventDefault();

  const cardNumber = document.getElementById("cardNumber").value;
  const name = document.getElementById("name").value;
  const dataRecorded = document.getElementById("dataRecorded");
  const numberMaskify = validator.maskify(cardNumber);
  dataRecorded.innerText = "Hola " + name;
  const cardValid = document.getElementById("cardValid");
  if (validator.isValid(cardNumber)) {
    cardValid.innerText = "Tarjeta " + numberMaskify + " es válida";
  } else {
    cardValid.innerText = "Tarjeta " + numberMaskify + " no es válida";
  }
}

function limitNumber() {
  const input = document.getElementById("cardNumber");
  const cardNumber = input.value;
  input.value = validator.limit(cardNumber);
}


// permite publicar algo de manera 100% global... :D
//window.limit = limitNumber;
//window.validar = validarDatos;


const validateForm = document.getElementById('validateForm');
validateForm.addEventListener('submit', validarDatos);
const cardNumber = document.getElementById("cardNumber");
cardNumber.addEventListener('keyup', limitNumber);




//console.log(validator);
