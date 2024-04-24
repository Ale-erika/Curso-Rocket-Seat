import state from "./state.js";
import * as timer from "./timer.js";
import * as element from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
}

export function toggleStopRunning() {
  state.isRunning = !state.isRunning;
}

export function toggleAdd5m() {
  timer.addMinutes(element.minutes.textContent);
}

export function toggleSub5m() {
  timer.subMinutes(element.minutes.textContent);
}

