function handleAPIResponse(response) {
    if (response.success) {
        console.log("Data: ".concat(response.data));
    }
    else {
        console.error("Error: ".concat(response.error));
    }
}
