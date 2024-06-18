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
