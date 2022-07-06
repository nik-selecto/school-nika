/**
 * Using 'async/await'
 * syntax add promises to function to provide
 * correct order of pushing digits to 'numbers' array
 */
async function orderCounting() {
  const numbers = [];

  setTimeout(() => {
    console.info(1);
    numbers.push(1);
  }, 1000);

  setTimeout(() => {
    console.info(2);
    numbers.push(2);
  }, 900);

  setTimeout(() => {
    console.info(3);
    numbers.push(3);
  }, 200);

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('All timeouts should be ended');
      resolve();
    }, 2000);
  });

  return numbers;
}

// Uncomment this function call to see your solution in action
// orderCounting();

module.exports = orderCounting;
