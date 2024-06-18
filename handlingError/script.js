
let page = 1;
let per_page = 21;
let inputData = "";
const myAccessKey = "37hy55_sqs-qxwgCKjuqviA2Itxc8IJtLF1Cs7tmK_k";
let companyName = "GoMyCode"

// Using Unsplash API
const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&query=${inputData}&client_id=${myAccessKey}`; //Endpoint

async function awaitCall() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Walahi, no be ${companyName} cause am, na Server no gree fetch. Please try again later.`
      );
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Oops! Something went wrong:", error.message);
    alert("Sorry, there was a problem fetching data. Please try again later.");
  }
}

awaitCall();
