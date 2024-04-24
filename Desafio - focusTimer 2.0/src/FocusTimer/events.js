import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as element from "./elements.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";
import * as sounds from "./sounds.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
}

export function setMinutes() {
  element.minutes.addEventListener("focus", () => {
    element.minutes.textContent = "";
  });

  element.minutes.onkeypress = (event) => /\d/.test(event.key);
  element.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    state.minutes = time;
    state.seconds = 0;
    updateDisplay();
    element.minutes.removeAttribute("contenteditable");
  });
}

export function registerIcons() {
  cards.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    console.log(event.target.dataset.action);

    if (action == "playSoundForest") {
      sounds.iconForest.play();
    } else {
      sounds.iconForest.pause();
    }

    if (action == "playSoundRain") {
      sounds.iconRain.play();
    } else {
      sounds.iconRain.pause();
    }

    if (action == "playSoundCoffee") {
      sounds.iconCoffee.play();
    } else {
      sounds.iconCoffee.pause();
    }

    if (action == "playSoundFire") {
      sounds.iconFire.play();
    } else {
      sounds.iconFire.pause();
    }
  });
}
