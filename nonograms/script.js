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
        <div class="table"></div>
    </div>
`;
document.body.innerHTML = container;

const table = document.querySelector(".table");

function createCell(type, className) {
  for (let i = 0; i <= id * 5; i++) {
    for (let j = 0; j <= id * 5; j++) {
      const element = document.createElement(type);
      if (j === 0) {
        element.className = "desc-hor";
      }
      if (i === 0) {
        element.className = "desc-vert";
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

// Color cell

block.forEach((e) => {
  e.addEventListener("click", () => {
    if (
      picture[id][0][e.getAttribute("cell")[0]][e.getAttribute("cell")[1]] === 1
    ) {
      e.classList.toggle("color");
    }

    console.log(e.style.backgroundColor);
  });
});
