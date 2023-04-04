
const card = document.querySelector(`.square`);



/**
 * Get display width
 */
const getScreenSize = () => document.documentElement.clientWidth;


/**
 * Listener resize display
 * @param dispatch - if you need to save to store
 */
function listener (obj, dispatch) {
  console.log(`Start`);
  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
      }, 200);
    }
  }

  // Получаем текущий размер экрана и сохраняем в store
  function actualResizeHandler() {
    const screenSize = getScreenSize();
    console.log('screenSize: ', screenSize);

    // Сохраняем с store
    // раскоментируй и используй если будешь сохранять в стор
    // dispatch(uiSlice.actions.setScreenFormats(screenSize));

    // Если не использовать стор, тогда обрабатываем тут
    if (screenSize < 600) card.classList.add(`hide`);
    else card.classList.remove(`hide`);
  }

  // Один раз запускаем в самом начале
  actualResizeHandler();
};


// Init
listener();
