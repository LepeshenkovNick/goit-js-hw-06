const button = document.querySelector('.change-color');
const btnSpan = document.querySelector('.color');

button.addEventListener('click', onChangeColor)

function onChangeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  btnSpan.textContent = newColor
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
