const { get } = require('http');

function calcSquareWithDelay(side, delay) {
  return new Promise((resolve, reject) => {
    if (typeof side !== 'number') {
      reject(
        new Error(
          'argument number should be here. I got ' + typeof side + ' instead'
        )
      );
    }
    setTimeout(() => {
      console.log(`delay is = ${delay}`);
      resolve(getResult(side));
    }, delay);
  });
}

function getResult(n) {
  return n * n;
}

function random(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

calcSquareWithDelay(1, random(1000, 3000))
  .then((result) => {
    console.log(result);
    return calcSquareWithDelay(2, random(1000, 3000));
  })
  .then((result) => {
    console.log(result);
    return calcSquareWithDelay(3, random(1000, 3000));
  })
  .then((result) => {
    console.log(result);
    return calcSquareWithDelay(6, random(1000, 3000));
  })
  .then((result) => {
    console.log(result);
    return calcSquareWithDelay(10, random(1000, 3000));
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`Error just happened ${err}`);
  });

async function callPromisseFunction() {
  try {
    await calcSquareWithDelay(1, random(1000, 3000));
    await calcSquareWithDelay(2, random(1000, 3000));
    await calcSquareWithDelay(3, random(1000, 3000));
    await calcSquareWithDelay(10, random(1000, 3000));
  } catch (err) {
    console.log('some error!!!');
  }
}

await getResult(10).then((result) => {
  console.log(result);
});

callPromisseFunction();
