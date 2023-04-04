import { HtmlLogger } from './html-logger/index.js';
import { formatDate, oneMonth, getMsFromDate, day } from './dates/index.js';


const logger = new HtmlLogger(`.root`, 800);
const log = (n, m) => logger.addRow(m, n, 100);


const calcDaysInInterval = (diff) => Math.floor(diff / day(1));

const getDaysByInterval = (startDate, daysCount) => {
  let days = [];
  
  let date = startDate;
  for (let i = 0; i < daysCount; i++) {
    days.push(formatDate(date, `YYYY-MM-DD`));
    date += day(1);
  }

  return days
};

// const current = new Date();
// const start = getMsFromDate(current);
const start = 1640995200000;
const end = start + day(3);
const diff = end - start;
const days = calcDaysInInterval(diff);

const datesArr = getDaysByInterval(start, days);


log('start', start);
log(`end`, end);
log(`diff`, diff);
log(`days`, days);
log(`datesArr`, datesArr);

const s = new Date(`2022-01-04`).getTime();
log(`S`, s);
log(`transform S`, formatDate(s, `YYYY-MM-DD`));


// Click nah!
const $rerenderBtn  = document.querySelector(`.rerender-btn`);
const $rerenderSpan = document.querySelector(`.rerender-span`);
const $rerenderComp = document.querySelector(`.rerender-comp`);
$rerenderBtn.addEventListener(`click`, rerender);

function rerender() {
  $rerenderSpan.classList.remove(`rerender`);
  $rerenderComp.classList.remove(`component`);
  setTimeout(() => {
    $rerenderSpan.classList.add(`rerender`);
    $rerenderComp.classList.add(`component`);
  }, 0);
};
