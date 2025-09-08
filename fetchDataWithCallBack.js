function fetchDataWithCallback(callback) {
    setTimeout(() => {
        try {
            let error = true;

            if (error) {
                throw new Error("Fetch failed");
            }

            callback("Data fetched");
        } catch (err) {
            console.error("Error: " + err.message);
        }
    }, 2000);
    
}




//Example usage:
fetchDataWithCallback((message) => {
    console.log(message)
});