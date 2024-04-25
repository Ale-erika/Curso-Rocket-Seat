const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const cookie = screen1.querySelector("img");
const button = screen2.querySelector("button");
const luck = screen2.querySelector("p");

const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Seja leve, releve",
  "Divida sua felicidade com os outros hoje mesmo",
  "A sorte vem ao seu encontro",
  "Seu grande sonho é constituir família",
  "A vontade das pessoas é a melhor das leis.",
  "Você é diligente e sistemático em seus acordos comerciais",
  "Você será uma pessoa bem viajada, seja por lazer, seja por trabalho",
];

// let randomIndex = Math.round(Math.random() * 10);

cookie.addEventListener("click", openCookie);

document.querySelector(".card-sorte p");

function openCookie(event) {
  event.preventDefault();
  const random = (Math.random() * (phrases.length - 0) + 0).toFixed(0);
  luck.innerText = phrases[random];

  console.log(luck.innerText);
  toggleScreen();
}

function sortAgain() {
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

cookie.addEventListener("click", openCookie);
button.addEventListener("click", sortAgain);
