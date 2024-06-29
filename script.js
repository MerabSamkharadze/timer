"use strict";

const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start() {
    console.log("start");
  }
  pause() {
    console.log("pause");
  }
}

const timer = new Timer(durationInput, startButton, pauseButton);
