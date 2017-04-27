let globalTimer;

function returnObject(index) {
  return {
    yo: index,
  }
}

function startTimer(index) {
  if (index === 4) {
    return startTimer(0);
  }
  console.log(returnObject(index));
  return globalTimer = setTimeout(() => {
    return startTimer(++index);
  }, 2000);
}

startTimer(0);

setTimeout(() => {
  clearTimeout(globalTimer);
  startTimer(1);
}, 5000);
