// Script

function addScript(src) {
  var script = document.createElement("script");
  script.src = src;
  document.head.appendChild(script);
}

// Game variables
const id = 2;
const picture = {
  1: [
    [
      [1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
    [
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ],
    [
      [0, 1, 1, 1, 1],
      [0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 0, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1],
    ],
  ],
  2: [
    [
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    ],
    [
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ],
    [
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    ],
    [
      [1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    ],
  ],
  3: [
    [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  ],
};

const gamePlay = function () {
  let getRandomNumber = function () {
    return Math.floor(Math.random() * 5);
  };

  let randomNum = getRandomNumber();

  const container = `
<div class="container">
        <div class="stats">
            <div class="score"></div>
            <div class="time">00:00</div>
            <button class="menu">Menu</button>
        </div>
        <div class="gameField"></div>
    </div>
`;
  // Container
  if (document.body === null) {
    const bodyEl = document.createElement("body");
    document.body = bodyEl;
  }

  document.body.innerHTML = container;

  // Timer

  const score = document.querySelector(".score");
  const time = document.querySelector(".time");

  let sec = 0;

  let setTimer = function setTimer() {
    window.setInterval(timer, 1000);
  };

  function timer() {
    sec += 1;
    time.innerHTML = [(sec / 60) % 60 | 0, sec % 60]
      .map(function (i) {
        return i < 10 ? "0" + i : i;
      })
      .join(":");
  }

  setTimer();

  // Create game field

  const gameField = document.querySelector(".gameField");

  function createCell(type, className) {
    for (let i = 0; i <= id * 5; i++) {
      for (let j = 0; j <= id * 5; j++) {
        const element = document.createElement(type);
        if (j === 0) {
          element.className = "tipCellX";
          element.id = `h${i}`;
        }
        if (i === 0) {
          element.className = "tipCellY";
          element.id = `v${j}`;
        }
        if (i !== 0 && j !== 0) {
          element.className = className;
          element.setAttribute("cell", `${i - 1},${j - 1}`);
        }
        gameField.append(element);
      }
    }
  }

  createCell("div", "block");

  const block = document.querySelector(".gameField").childNodes;

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

  // Cells counter (colored cells)
  let points = 0;
  let pointsCount = 0;

  function countCell() {
    for (let i = 0; i < id * 5; i++) {
      let tipCellCountX = 0;
      let tipCellCountY = 0;
      const tipCellX = document.getElementById(`h${i + 1}`);
      const tipCellY = document.getElementById(`v${i + 1}`);
      for (let j = 0; j < id * 5; j++) {
        if (picture[id][randomNum][i][j] === 1) {
          pointsCount += 1;
          tipCellCountX += 1;
        }
        if (picture[id][randomNum][j][i] === 1) {
          tipCellCountY += 1;
        }
        if (picture[id][randomNum][i][j] === 0) {
          tipCellCountX > 0
            ? tipCellX.insertAdjacentHTML("beforeend", `${tipCellCountX} `)
            : tipCellCountX;
          tipCellCountX = 0;
        }
        if (picture[id][randomNum][j][i] === 0) {
          tipCellCountY > 0
            ? tipCellY.insertAdjacentHTML("beforeend", `${tipCellCountY}<br>`)
            : tipCellCountY;
          tipCellCountY = 0;
        }
        if (j + 1 === id * 5) {
          tipCellCountY > 0
            ? tipCellY.insertAdjacentHTML("beforeend", `${tipCellCountY}`)
            : tipCellCountY;
          tipCellCountX > 0
            ? tipCellX.insertAdjacentHTML("beforeend", `${tipCellCountX}`)
            : tipCellCountX;
        }
      }
    }
    return pointsCount;
  }
  countCell();

  score.innerHTML = `${points}/${pointsCount}`;

  // Victory + game process (colored cells)

  const win_display = `
<div class="win_display">Great! You have solved the nonogram!
<p class="game_time">Your time is: </p>
<button class = "menu">Menu</button>
</div>
`;

  block.forEach((e) => {
    e.addEventListener("click", () => {
      if (
        picture[id][randomNum][e.getAttribute("cell").split(",")[0]][
          e.getAttribute("cell").split(",")[1]
        ] === 1
      ) {
        console.log(e.getAttribute("cell").split(",")[0]);
        e.classList.toggle("color");
        e.className === "block color" ? (points += 1) : (points -= 1);
        score.innerHTML = `${points}/${pointsCount}`;
        if (points === pointsCount)
          setTimeout(() => {
            const time_result = time.textContent;
            document.body.innerHTML = win_display;
            const game_time = document.querySelector(".game_time");
            game_time.append(`${time_result}`);
            const button_menu = document.querySelector(".menu");
            button_menu.addEventListener("click", () => {
              document.body.remove(win_display);
              addScript("./script.js");
              gamePlay();
            });
          }, 500);
      }
    });
  });
};

gamePlay();
