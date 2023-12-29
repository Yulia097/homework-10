// create async function and print result !!!! through .then block. (3 functions)

//  Помилка: SyntaxError: await is only valid in async functions and the top level bodies of modules

function count(n) {
  if (typeof name === 'string' && name.trim() !== '') {
    return `Hello ${name}. Have a nice day!`;
  } else {
    throw new Error('Invalid name. Please provide a non-empty string.');
  }
}
await getResult(10)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

function sayHi(name) {
  if (typeof name === 'string' && name.trim() !== '') {
    return `Hello ${name}. Have a nice day!`;
  } else {
    throw new Error('Invalid name. Please provide a non-empty string.');
  }
}

await sayHi('Kate')
  .then((result1) => {
    console.log(result1);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

await sayHi('')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

const namesArray = ['Kate', 'Monica', 'John', 'Alice'];

function greetPeople(names) {
  const results = [];

  for (const name of names) {
    try {
      const result = greetPeople(name);
      if (name !== 'Vadim') {
        results.push(result);
      } else {
        results.push('Vadim is not greeted!');
      }
    } catch (error) {
      console.error('Error:', error.message);
      results.push(`Error for ${name}: ${error.message}`);
    }
  }

  return results;
}
await greetPeople(namesArray)
  .then((results) => {
    results.forEach((result) => {
      console.log(result);
    });
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

// перетворити синхронну (звичайну функцію), яка повертає якесь значення в асинхронну (add await before call), додайти .then block та виведіть значення яке повернулось.

function multiply(n) {
  return n * n;
}
await multiply(23).then((result) => {
  console.log(result);
});

// It worked for me if we using Promises
async function asyncFunction1(name) {
  return new Promise((resolve) => {
    resolve(`hello ${name}`);
  });
}

asyncFunction1('Kate').then((result1) => {
  console.log(result1);
});

asyncFunction1('John').then((result2) => {
  console.log(result2);
});

async function asyncFunction2(variable) {
  return new Promise((resolve, reject) => {
    if (typeof variable === 'number') {
      resolve(`You are the number ${variable}`);
    } else {
      reject(
        new Error(
          'The argument should be a number. I got ' +
            typeof variable +
            ' instead'
        )
      );
    }
  });
}

asyncFunction2('Kate')
  .then((result1) => {
    console.log(result1);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

asyncFunction2(32436373737)
  .then((result2) => {
    console.log(result2);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
