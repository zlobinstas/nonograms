// Script

var isMode = false;

var audioColor = new Audio();
audioColor.src = "icon/colored.mp3";
var audioCross = new Audio();
audioCross.src = "./icon/cross.mp3";
var audioWin = new Audio();
audioWin.src = "./icon/win.mp3";

var pictName = {
  1: ["tree", "crucifix", "mark", "elephant", "mask"],
  2: ["windsnake", "diamond", "heart", "superman", "mountain"],
  3: ["palm", "man", "venom", "panda", "pokeball"],
};

var level = 1;

var numberPicture;

function mainPage() {
  const mainPage = `
  <div class="mainPage">
    <div class="title">Nonogram by Stanislav Zlobin</div>
    <div class="easy">Easy</div>
    <div class="medium">Medium</div>
    <div class="hard">Hard</div>
    <div class="random">Random</div>
  </div>
  `;
  if (document.body === null) {
    const bodyEl = document.createElement("body");
    document.body = bodyEl;
  }
  document.body.innerHTML = mainPage;

  var mainP = document.querySelector(".mainPage");
  if (isMode) {
    mainP.style.color = "rgb(239, 132, 3)";
  }

  var title = document.querySelector(".title");
  var easy = document.querySelector(".easy");
  var medium = document.querySelector(".medium");
  var hard = document.querySelector(".hard");
  var random = document.querySelector(".random");

  var complex = `
  <div class="choosePicMenu"></div>
  `;

  // console.log(pictName[1]);

  var choosePictCont;

  function choosePict() {
    for (let i = 0; i < pictName[level].length; i++) {
      let div = document.createElement("div");
      div.className = i;
      div.innerText = pictName[level][i];
      div.style.cursor = "pointer";
      div.style.marginBottom = "20px";
      div.style.fontSize = "1.5em";
      choosePictCont.append(div);
    }
    for (let i = 0; i < choosePictCont.children.length; i++) {
      choosePictCont.children[i].addEventListener("click", () => {
        numberPicture = choosePictCont.children[i].classList.value;
        gamePlay();
      });
    }
  }

  easy.addEventListener("click", () => {
    level = 1;
    document.body.innerHTML = complex;
    choosePictCont = document.querySelector(".choosePicMenu");
    choosePict();
    // gamePlay();
  });

  medium.addEventListener("click", () => {
    level = 2;
    document.body.innerHTML = complex;
    choosePictCont = document.querySelector(".choosePicMenu");
    choosePict();
    // gamePlay();
  });

  hard.addEventListener("click", () => {
    level = 3;
    document.body.innerHTML = complex;
    choosePictCont = document.querySelector(".choosePicMenu");
    choosePict();
    // gamePlay();
  });

  random.addEventListener("click", () => {
    level = Math.ceil(Math.random() * 3);
    gamePlay();
  });
}

//

// mainPage();

function addScript(src) {
  var script = document.createElement("script");
  script.src = src;
  document.head.appendChild(script);
}

var gamePlay = function () {
  // Game variables
  const id = level;
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
        [0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
      ],
    ],
    2: [
      [
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
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
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      ],
      [
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
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
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      ],
      [
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      ],
    ],
  };
  let getRandomNumber = function () {
    return Math.floor(Math.random() * 5);
  };
  if (!numberPicture) {
    numberPicture = getRandomNumber();
  }

  const container = `
<div class="container">
        <div class="stats">
            <div class="score"></div>
            <div class="time">00:00</div>
            <button class="menu">Menu</button>
            <button class="restart">Restart</button>
            <button class="decision">Solution</button>
            <button class="mode">Mode</button>
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

  const score = document.querySelector(".score");
  const time = document.querySelector(".time");

  // Timer

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
        if (picture[id][numberPicture][i][j] === 1) {
          pointsCount += 1;
          tipCellCountX += 1;
        }
        if (picture[id][numberPicture][j][i] === 1) {
          tipCellCountY += 1;
        }
        if (picture[id][numberPicture][i][j] === 0) {
          tipCellCountX > 0
            ? tipCellX.insertAdjacentHTML("beforeend", `${tipCellCountX} `)
            : tipCellCountX;
          tipCellCountX = 0;
        }
        if (picture[id][numberPicture][j][i] === 0) {
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
  let firstClick = 0;
  let coloredBlocks = 0;
  block.forEach((e) => {
    e.addEventListener("click", () => {
      audioColor.play();

      if (firstClick === 0) {
        setTimer();
        firstClick = 1;
      }
      if (e.hasAttribute("cell")) {
        if (isMode === false) {
          e.classList.toggle("color");
        } else {
          e.classList.remove("color");
          e.classList.toggle("reverseColor");
        }
      }
      if (
        e.hasAttribute("cell") &&
        picture[id][numberPicture][e.getAttribute("cell").split(",")[0]][
          e.getAttribute("cell").split(",")[1]
        ] === 1
      ) {
        e.className === "block color" || e.className === "block reverseColor"
          ? (points += 1)
          : (points -= 1);
        score.innerHTML = `${points}/${pointsCount}`;
      }
      // coloredBlocks = document.querySelectorAll(".color").length;
      isMode
        ? (coloredBlocks =
            document.getElementsByClassName("block reverseColor").length)
        : (coloredBlocks =
            document.getElementsByClassName("block color").length);

      console.log(coloredBlocks);

      if (points === pointsCount && points === coloredBlocks)
        setTimeout(() => {
          audioWin.play();
          const time_result = time.textContent;
          document.body.innerHTML = win_display;
          const game_time = document.querySelector(".game_time");
          game_time.append(`${time_result}`);
          const button_menu = document.querySelector(".menu");
          const win_disp = document.querySelector(".win_display");
          if (isMode) {
            win_disp.style.color = "rgb(239, 132, 3)";
            button_menu.style.color = "rgb(239, 132, 3)";
          }
          button_menu.addEventListener("click", () => {
            document.body.remove(win_display);
            addScript("./script.js");
            // gamePlay();
            mainPage();
          });
        }, 500);
    });
  });

  var restart = document.querySelector(".restart");
  let bl = document.querySelectorAll(".block");
  const button_menu = document.querySelector(".menu");

  button_menu.addEventListener("click", () => {
    // addScript("./script.js");
    // gamePlay();
    mainPage();
  });

  restart.addEventListener("click", () => {
    bl.forEach((el) => {
      el.classList.remove("reverseColor");
      el.classList.remove("color");
    });
    points = 0;
    score.innerHTML = `${points}/${pointsCount}`;
  });

  var decision = document.querySelector(".decision");
  decision.addEventListener("click", () => {
    let bl = document.querySelectorAll(".block");
    bl.forEach((el) => {
      el.classList.remove("reverseColor");
      el.classList.remove("color");
    });
    for (let i = 0; i < id * 5; i++) {
      for (let j = 0; j < id * 5; j++) {
        if (picture[id][numberPicture][i][j] === 1) {
          bl.forEach((el) => {
            if (el.getAttribute("cell") === `${i},${j}`) {
              isMode
                ? el.classList.add("reverseColor")
                : el.classList.add("color");
            }
          });
        }
      }
    }
    points = pointsCount;
    score.innerHTML = `${points}/${pointsCount}`;
  });

  block.forEach((e) => {
    e.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      audioCross.play();
      if (firstClick === 0) {
        setTimer();
        firstClick = 1;
      }
      e.hasAttribute("cell") ? e.classList.toggle("cross") : 0;
    });
  });

  var mode = document.querySelector(".mode");
  menu = document.querySelector(".menu");
  mode.addEventListener("click", () => {
    isMode === false ? (isMode = true) : (isMode = false);
    score.classList.toggle("reverseWhite");
    time.classList.toggle("reverseWhite");
    button_menu.classList.toggle("reverseWhite");
    restart.classList.toggle("reverseWhite");
    decision.classList.toggle("reverseWhite");
    mode.classList.toggle("reverseWhite");
    document.body.classList.toggle("reverseBlack");

    for (let i = 0; i < gameField.children.length; i++) {
      // console.log(gameField.children[i].classList.contains("block"));
      if (
        gameField.children[i].classList.contains("tipCellX") ||
        gameField.children[i].classList.contains("tipCellY")
      ) {
        gameField.children[i].classList.toggle("reverseWhite");
      }
      if (
        gameField.children[i].classList.contains("reverseColor") ||
        gameField.children[i].classList.contains("color")
      ) {
        gameField.children[i].classList.toggle("color");
        gameField.children[i].classList.toggle("reverseColor");
      }
    }
  });
};

gamePlay();
