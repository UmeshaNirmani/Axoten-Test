/**
 * The console should print following logs in exact order
 *
 * > Hello World
 * > 2023!
 */

// DO NOT MODIFY THIS FUNCTION
const printHelloWorld = async () => {
  await new Promise((a, b) => {
    setTimeout(() => {
      a();
    }, 10);
  });
  console.log("Hello World");
};

// DO NOT MODIFY THIS FUNCTION
const print2023 = () => {
  console.log("2023!");
};

/**
 * Update the following function to get the expected output
 *
 * Expected Output in terminal
 * > Hello World
 * > 2023!
 */
const app = async () => {
  await printHelloWorld();
  print2023();
};

app();
