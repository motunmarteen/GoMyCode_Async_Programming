// Task 01: Iterating with Async/Await
// Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

let delayTime = 1000 // Delay time of 1 second
let userInput = prompt("Enter a list of items separated by commas:");
let arr = userInput.split(",");

async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    await new Promise((resolve) => setTimeout(resolve, delayTime));
    console.log(value);
  }
}

iterateWithAsyncAwait(arr);
