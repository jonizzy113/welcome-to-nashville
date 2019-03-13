//Main Page Functions

createDOM();

const concertButton = document.querySelector("#concertButton")

function searchAPI(event) {
   const concertInputValue = document.querySelector("#concertInput").value;
   getConcertAPI(concertInputValue).then(searchResultsObject)
}

concertButton.addEventListener('click', searchAPI);