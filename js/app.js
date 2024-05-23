const ui = {
  timer: document.querySelector("#timer"),
};

updateTimer();

setInterval(updateTimer, 1000);

function updateTimer() {

  ui.timer.innerHTML = `${Date.now()}`;

}