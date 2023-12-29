function calcSquareWithDelay(side, delay, callback) {
  if (typeof side !== 'number') {
    console.log(
      new Error(
        'argument number should be here. I got ' + typeof side + ' instead'
      )
    );
    return;
  }
  setTimeout(() => {
    console.log(`delay is = ${delay}`);
    let result = getResult(side);
    callback(result);
  }, delay);
}

function getResult(n) {
  return n * n;
}

function random(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

calcSquareWithDelay(2, random(1000, 5000), (result) => {
  console.log(result);
  calcSquareWithDelay('asd', random(1000, 5000), (result) => {
    console.log(result);
    calcSquareWithDelay(4, random(1000, 5000), (result) => {
      console.log(result);
      calcSquareWithDelay(10, random(1000, 5000), (result) => {
        console.log(result);
        calcSquareWithDelay(15, random(1000, 5000), (result) => {
          console.log(result);
          calcSquareWithDelay(20, random(1000, 5000), (result) => {
            console.log(result);
          });
        });
      });
    });
  });
});
