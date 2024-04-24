import state from "./state.js";
import * as element from "./elements.js";

export function countDown() {
  clearTimeout(state.countDownId);

  if (!state.isRunning) {
    return;
  }

  let minutes = Number(element.minutes.textContent);
  let seconds = Number(element.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    reset();

    return;
  }

  updateDisplay(minutes, seconds);

  state.countDownId = setTimeout(() => countDown(), 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  element.minutes.textContent = String(minutes).padStart(2, "0");

  element.seconds.textContent = String(seconds).padStart(2, "0");
}

export function addMinutes(minutes) {
  console.log(minutes);
  minutes = Number(minutes) + 5;

  element.minutes.textContent = minutes;

  if (minutes > 60) {
    updateDisplay();
  }
}


export function subMinutes(minutes) {
  console.log(minutes);
  minutes = Number(minutes) - 5;

  element.minutes.textContent = minutes;

  if (minutes < 0 ) {
    updateDisplay();
  }
}
