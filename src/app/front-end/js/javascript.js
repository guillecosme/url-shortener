function clearInput(id) {
    document.getElementById(id).value = "";
    console.log('The input has been cleared.')
}

function displayShortenedURLDiv() {
    console.log('Displaying the hidden URL div details')
    urlDetailsDiv = document.getElementById('url-details');
    urlDetailsDiv.style.display = "block";
}

function submitRequest(id) {
    console.log('Starting the API call Request');
    clearInput(id);
    displayShortenedURLDiv();
}

function refresh() {
    console.log('Hiding the URL div details')
    urlDetailsDiv = document.getElementById('url-details');
    urlDetailsDiv.style.display = "none";
}

