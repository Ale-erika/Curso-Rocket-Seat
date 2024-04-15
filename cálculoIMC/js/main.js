import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { IMC, notNumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height);

  if (showAlertError) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();

/*outras forma de declarar função*/

/* arrow function


form.onsubmit = (event) => {
  event.preventDefault();

  const weigth = inputWeigth.value;
  const heigth = inputHeigth.value;

};

/* 

form.onsubmit = handleSubmit


function handleSubmit(event) {
  event.preventDefault();

  const weigth = inputWeigth.value;
  const heigth = inputHeigth.value;

};
*/
