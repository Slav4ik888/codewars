// CONSTS
const containerWidth = 600;
const containerHeight = 200;
const containerMargin = 20;
const squireWidht = 30;

const mimHeight = containerMargin;
const maxHeight = containerHeight - squireWidht + 1 + containerMargin;

// VARIABLES
// const screenWidth = window.screen.width; // Размер монитора вроде
// const screenWidth = window.outerWidth // Размер внешнего экрана браузера
const screenWidth = window.innerWidth;
const leftLimitBorder = (screenWidth - containerWidth) / 2;
const rightLimitBorder = screenWidth - leftLimitBorder - squireWidht + 1;

// Перемещающийся квадратик
let root = document.documentElement;
root.addEventListener(`mousemove`, e => {
  const X = e.clientX;
  const Y = e.clientY;
  if (Y >= mimHeight && Y <= maxHeight && X > leftLimitBorder && X <= rightLimitBorder) {
    root.style.setProperty('--mouse-x', X + "px");
    root.style.setProperty('--mouse-y', Y + "px");
    console.log('e: ', X, Y);
  }
});

// Движущаяся фоновая картинка
const imgEl = document.querySelector(`#module`);

imgEl.addEventListener(`mousemove`, e => {
  imgEl.style.backgroundPositionX = -e.offsetX + `px`;
  imgEl.style.backgroundPositionY = -e.offsetY + `px`;
})
