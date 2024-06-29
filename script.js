"use strict";

const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("timer started");
  },
  onTick() {
    console.log("timer jus ticked down");
  },
  onComplete() {
    console.log("timer is completed");
  },
});
