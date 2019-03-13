function searchAPI(event) {
   const concertInputValue = document.querySelector("#concertInput").value;
   getConcertAPI(concertInputValue).then(searchResultsObject)
}

function searchAPI(event) {
   const parkInputValue = document.querySelector("#parkInput").value;
   getParksAPI(parkInputValue).then(searchResultsObject)
}