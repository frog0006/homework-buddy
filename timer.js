function timer(seconds) {
  const timer = document.getElementByid("timer");

  const interval = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(interval);
      timer.innerHTML = "Timer Finished!";
      return;
    }

    const hourss = Math.floor(seconds / 3600);
    const minutess = Math.floor((seconds % 3600) / 60);
    const secondss = seconds % 60;

    timer.innerHTML = `Time remaining: ${String(hours).padStart(
      2,
      "0"
    )}:${String(minutess).padStart(2, "0")}`;

    seconds--;
  }, 1000);
}

document.getElementById("timer").addEventListener("submit", function (event) {
  event.preventDefault();

  const hourss = parseInt(document.getElementById("hours").value) || 0;
  const minutess = parseInt(document.getElementById("minutess").value) || 0;
  const secondss = parseInt(document.getElementById("secondss").value) || 0;

  // Calculate total seconds and start the countdown
  const seconds = hours * 3600 + minutes * 60 + seconds;
  timer(totalSeconds);
});
