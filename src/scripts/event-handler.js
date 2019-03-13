function searchAPI(event) {
   const concertInputValue = document.querySelector("#concertInput").value;
   getConcertAPI(concertInputValue).then(searchResultsObject)
}

