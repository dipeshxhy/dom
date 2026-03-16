const selectFormat = document.getElementById('format');
const selectTone = document.getElementById('tone');
const generateBtn = document.getElementById('generateBtn');
const paletteContainer = document.getElementById('paletteContainer');
const palette = document.getElementById('palette');

function randomRGB(tome){
  let min = 0;
  let max = 255;
  if(tome === 'light'){
    min = 200;
  }else if(tome === 'dark'){
    max = 100;
  }
  const r = Math.floor(Math.random() * (max - min + 1)) + min;
  const g = Math.floor(Math.random() * (max - min + 1)) + min;
  const b = Math.floor(Math.random() * (max - min + 1)) + min;
  return `rgb(${r},${g},${b})`;
}
function convertToHex(rgb){
  const rgbValues = rgb.match(/\d+/g).map(Number);
  const hex = rgbValues.map(value => value.toString(16).padStart(2, '0')).join('');
  return `#${hex}`;
}

function generatePalette(){
  palette.innerHTML = '';
  let color ;
  for(let i=0; i<5; i++){
  if(selectFormat.value === 'rgb'){
    color = randomRGB(selectTone.value);
  }else{
    const rgb = randomRGB(selectTone.value);
    color = convertToHex(rgb);
  }
  const colorBox = document.createElement('div');
  colorBox.classList.add('color-box');
  colorBox.style.backgroundColor = color;
  if(selectTone.value === 'dark'){
    colorBox.textContent = color;
    colorBox.style.color = '#fff';
    colorBox.style.fontSize = '12px';

  }
  if(selectTone.value === 'light'){
  colorBox.textContent = color;
  colorBox.style.color = '#000';
  colorBox.style.fontSize = '12px';

  }
  palette.appendChild(colorBox);
  colorBox.addEventListener('click',()=>{
    const color = colorBox.textContent;
    navigator.clipboard.writeText(color).then(()=>{
      alert(`Color ${color} copied to clipboard!`);
    }).catch(err=>{
      console.error('Failed to copy color: ',err);
    })
  })

  }
}
generateBtn.addEventListener('click', generatePalette)
generatePalette();
