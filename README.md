# js DOM Async Module

# Introduction to Asynchronous Programming in JavaScript
JavaScript is a single-threaded, non-blocking language. This means it can only perform one operation at a time, but it uses asynchronous programming to handle tasks such as API requests, file reading, and timers without freezing the main thread.

Asynchronous programming allows JavaScript to execute long-running operations while continuing to respond to other events (like user input).

1. Callbacks
A callback is a function passed into another function to be executed later, usually after an asynchronous operation completes.

Example:
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 2000);
}

fetchDataWithCallback((message) => {
    console.log(message); // Output after 2 seconds: "Data fetched"
});

2. Promises: A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
Example:
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        let error = false;
        setTimeout(() => {
            if (!error) {
                resolve("Data fetched with Promise");
            } else {
                reject("Fetch failed");
            }
        }, 2000);
    });
}

fetchDataWithPromise()
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err));



3. Async and Await
The async/await syntax is built on top of Promises and provides a cleaner, synchronous-looking way to write asynchronous code.
Example:
async function fetchDataAsync() {
    try {
        const data = await fetchDataWithPromise();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataAsync();

4. Activity: fetchDataWithCallback Function
Task
Create a function fetchDataWithCallback that simulates asynchronous data fetching using a callback and error handling.
Requirements:
Use setTimeout with a 2-second delay.
After 2 seconds:
If there is no error, call the callback with the string "Data fetched".
If error, log "Error: Fetch failed".
