const TIME_LIMIT = 900;
const DASH_ARRAY = 283;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

const COLOR_CODES = {
  info: {
    color: "blue"}
};
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
  <div class="timer">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="circle">
        <circle class="path" cx="50" cy="50" r="45"></circle>
        <path id="path-remaining" stroke-dasharray="283" class="remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0">
        </path>
      </g>
    </svg>
    <span id="timer-label" class="timer-label">
      ${formatTime(timeLeft)}
    </span>
  </div>
`;

function formatTime(time) {
  const min = Math.floor(time / 60);
  let sec = time % 60;

  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    
    document.getElementById("timer-label").innerHTML = formatTime(timeLeft);
    casharray();
  }, 1000);
}

// Divides time left by the defined time limit.
function calcTime() {
  const rawTime = timeLeft / TIME_LIMIT;
  return rawTime - (1 / TIME_LIMIT) * (1 - rawTime);
}
    
// Update the dasharray value as time passes, starting with 283
function casharray() {
  const circleDasharray = `${(
    calcTime() * DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}