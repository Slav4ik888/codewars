// Замораживает процесс на указанное кол-во миллисекунд
const slowMethod = (ms) => {
  let now = performance.now();

  while (performance.now() - now < ms)
  {
    // do nothing
  }
};

const timeNow = () => new Date().getTime();

const showTimeNow = (text) => {
  const time = timeNow();

  console.log(text, time);
  return time;
};

const start = showTimeNow('Start:');
slowMethod(1000);
const end = showTimeNow('End:');

console.log(`All time:`, end - start);
