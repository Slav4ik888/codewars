"use strict";

const MoneyBox = {
  goal       : 10000,
  countCells : 100,
  minStep    : 50,
  step       : 0,
  cells      : []
};


// VARIABLES
const moneyBox   = document.querySelector(`.money-box`);
const moneyForm  = document.querySelector(`.money-form`);
const goal       = document.querySelector(`.goal`);
const countCells = document.querySelector(`.count-cells`);
const minStep    = document.querySelector(`.min-step`);
const result     = document.querySelector(`.result`);


const resultBox  = document.querySelector(`.result-box`);
const resultCnt  = document.querySelector(`.result-cnt`);
const cellsRes   = document.querySelector(`.cells-res`);
const sumRes     = document.querySelector(`.sum-res`);


goal.value       = MoneyBox.goal;
countCells.value = MoneyBox.countCells;
minStep.value    = MoneyBox.minStep;


// LISTENERS
moneyForm.addEventListener(`submit`, calculate);


// FUNCTIONS
function calculate(e) {
  e.preventDefault();
  const form = e.target;

  MoneyBox.goal       = parseInt(form[`goal`].value); 
  MoneyBox.countCells = parseInt(form[`count-cells`].value); 
  MoneyBox.minStep    = parseInt(form[`min-step`].value); 

  if (noValidFormValue()) return;

  calcStep();
  calcCells();
  calcCorrectCellsByMinStep();
  showResult();
}


function calcStep() {
  const countsSteps = getCountsSteps();
  console.log('countsSteps: ', countsSteps);
  MoneyBox.step = Math.floor(MoneyBox.goal / countsSteps);
}

function calcCells() {
  let cells = [];
  
  for (let i = 1; i <= MoneyBox.countCells; i++) {
    let value = i * MoneyBox.step;
    cells.push(value);
  }
  console.log('cells: ', cells);
  // const correctValue = calcCorrectValue(cells);
  MoneyBox.cells = [...cells];
}

function calcCorrectCellsByMinStep() {
  let arr = [];
  
  MoneyBox.cells.forEach(step => arr.push(calcCorrectStep(step)));
  MoneyBox.cells = [...arr];
}

function calcCorrectStep(_step) {
  
  const minStep = MoneyBox.minStep;

  let newStep = _step;

  if (_step < minStep) {
    newStep += minStep - newStep;
  }
  else {
    if (_step % minStep) {
      newStep = Math.round(newStep / minStep) * minStep;
    }
  }
  return newStep;
}

function calcCorrectValue(cells) {
  return cells.reduce((sum, current) => sum + current, 0)
}

function getCountsSteps() {
  let counts = 0;

  for (let i = 1; i <= MoneyBox.countCells; i++) {
    counts += i;
  }
  return counts;
}


// DISPLAY

function showResult() {
  console.log('MoneyBox: ', MoneyBox);
  resultBox.classList.remove(`disabled`);
  moneyBox.classList.add(`disabled`);

  // cellsRes.textContent = MoneyBox.cells.join(`, `);
  // sumRes.textContent = calcCorrectValue(MoneyBox.cells);
  console.log('Общая сумма: ', calcCorrectValue(MoneyBox.cells));
  
  MoneyBox.cells.forEach(cell => {
    resultCnt.insertAdjacentHTML(`beforeend`, `<div class="cell">${cell}</div>`)
  })

}





// VALIDATION

function noValidFormValue() {
  if (MoneyBox.goal <= 0) {
    console.log(`Цель должна быть > 0`);
    return true
  }
  if (!MoneyBox.countCells || MoneyBox.countCells < 2) {
    console.log(`Кол-во ячеек должно быть > 2`);
    return true
  }
  if (MoneyBox.minStep < 10) {
    console.log(`Мин. шаг должен быть >= 10`);
    return true
  }
  
  return false;
}
