const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  // ... your code goes here
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let splitList = document.querySelector('#splits');

  let liElement = document.createElement('li');
  liElement.innerHTML = chronometer.splitClick();

  splitList.appendChild(liElement);
}

function clearSplits() {
  // ... your code goes here
  let splitList = document.querySelector('#splits');
  splitList.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here

  btnLeft.classList.toggle('stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.classList.toggle('split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.classList.toggle('stop');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRight.classList.toggle('split');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  //console.log('clicked');
  // ... your code goes here
  if (btnLeft.className === 'btn start') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.className === 'btn reset') {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
