const container = document.querySelector('#container');
const gridBtn = document.querySelector('#gridBtn');
const blackBtn = document.querySelector('#blackBtn');
const randomBtn = document.querySelector('#randomBtn');
const shadeBtn = document.querySelector('#shadeBtn');

let color = 'black';

let gridD = 16;

gridBtn.addEventListener('click', () => {
  gridD = prompt("What size grid?");

  if (gridD > 100) {
    gridD = 100;
  } else if (gridD < 1) {
    gridD = 1;
  }
  container.replaceChildren();

  createGrid(gridD);
});

blackBtn.addEventListener('click', () => {
  container.replaceChildren();

  color = 'black';

  createGrid(gridD);
});

randomBtn.addEventListener('click', () => {
  container.replaceChildren();

  color = 'random';

  createGrid(gridD);
});

shadeBtn.addEventListener('click', () => {
  container.replaceChildren();

  color = 'shade';

  createGrid(gridD);
});

function createGrid(gridDimensions) {
  for (let t = 0; t < gridD; t++) {
    const tempContain = document.createElement('div');
    tempContain.style.flex = 1;

    tempContain.style.display = "flex";

    for (let i = 0; i < gridD; i++) {
      const box = document.createElement('div');

      box.style.border = "1px solid rgba(0, 0, 0, 0.1)";
      box.style.flex = "1";
      box.style['border-radius'] = "4px";


      if (color == 'random') {
        box.addEventListener('mouseenter', toRainbow);
      } else if (color == "shade") {
        box.style.opacity = 0.1;
        box.addEventListener('mouseenter', shading);
      } else {
        box.addEventListener('mouseenter', toBlack);
      }

      tempContain.appendChild(box);
    }

    container.appendChild(tempContain);
  }
}

function toBlack(evt) {
  evt.currentTarget.style['background-color'] = "black";
}

function toRainbow(evt) {
  evt.currentTarget.style['background-color'] = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function shading(evt) {
  let opacity = parseFloat(window.getComputedStyle(evt.currentTarget).getPropertyValue("opacity"));
  console.log(opacity);
  if (opacity < 1) {
    evt.currentTarget.style.opacity = opacity + 0.1;
  }
  evt.currentTarget.style['background-color'] = "black";
}

createGrid(gridD);