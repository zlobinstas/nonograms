const id = 1;
const picture = {
  1: [
    [
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
    ],
    [],
    [],
    [],
    [],
  ],
};

const container = `
<div class="container">
        <div class="stats">
            <div class="score"></div>
            <div class="time">00:00</div>
        </div>
        <div class="table"></div>
    </div>
`;

document.body.innerHTML = container;

const score = document.querySelector(".score");
const time = document.querySelector(".time");

let sec = 0;

function setTimer() {
  window.setInterval(timer, 1000);
}

function timer() {
  sec += 1;
  time.innerHTML = [(sec / 60) % 60 | 0, sec % 60]
    .map(function (i) {
      return i < 10 ? "0" + i : i;
    })
    .join(":");
}

setTimer();

// Table

const table = document.querySelector(".table");

function createCell(type, className) {
  for (let i = 0; i <= id * 5; i++) {
    for (let j = 0; j <= id * 5; j++) {
      const element = document.createElement(type);
      if (j === 0) {
        element.className = "desc-hor";
        element.id = `h${i}`;
      }
      if (i === 0) {
        element.className = "desc-vert";
        element.id = `v${j}`;
      }
      if (i !== 0 && j !== 0) {
        element.className = className;
        element.setAttribute("cell", `${i - 1}${j - 1}`);
      }
      table.append(element);
    }
  }
}

createCell("div", "block");

const block = document.querySelector(".table").childNodes;

if (id === 2) {
  for (item of block) {
    item.style.width = "8.5%";
  }
}

if (id === 3) {
  for (item of block) {
    item.style.width = "5.7%";
  }
}

const block_nav = document.querySelectorAll(".block");

// Play game
let points = 0;
let pointsCount = 0;

function countCell() {
  for (let i = 0; i < id * 5; i++) {
    for (let j = 0; j < id * 5; j++) {
      picture[id][0][i][j] === 1 ? (pointsCount += 1) : pointsCount;
    }
  }
  return pointsCount;
}
countCell();

score.innerHTML = `${points}/${pointsCount}`;

block.forEach((e) => {
  e.addEventListener("click", () => {
    if (
      picture[id][0][e.getAttribute("cell")[0]][e.getAttribute("cell")[1]] === 1
    ) {
      e.classList.toggle("color");
      e.className === "block color" ? (points += 1) : (points -= 1);
      score.innerHTML = `${points}/${pointsCount}`;
      if (points === pointsCount) {
        alert("YOU WIN!");
      }
    }
  });
});
