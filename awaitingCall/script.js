// Task 02: Awaiting a Call
// Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.


let page = 1;
let per_page = 21;
let inputData = "";
const myAccessKey = "37hy55_sqs-qxwgCKjuqviA2Itxc8IJtLF1Cs7tmK_k";

// Using Unsplash API
const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&query=${inputData}&client_id=${myAccessKey}`; //Endpoint

async function awaitCall() {
  try {
    // Simulate fetching data from an API
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

awaitCall();
