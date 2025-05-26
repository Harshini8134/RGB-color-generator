const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const redVal = document.getElementById('red-val');
const greenVal = document.getElementById('green-val');
const blueVal = document.getElementById('blue-val');

const colorBox = document.getElementById('color-box');
const rgbValue = document.getElementById('rgb-value');

function updateColor() {
  const r = red.value;
  const g = green.value;
  const b = blue.value;

  redVal.textContent = r;
  greenVal.textContent = g;
  blueVal.textContent = b;

  const rgb = `rgb(${r},${g},${b})`;
  colorBox.style.backgroundColor = rgb;
  rgbValue.value = rgb;
}

function copyRGB() {
  rgbValue.select();
  document.execCommand('copy');
  alert("RGB value copied: " + rgbValue.value);
}

red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);

// Set initial color
updateColor();
