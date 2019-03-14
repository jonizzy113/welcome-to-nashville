function searchAPI(event) {
   const concertInputValue = document.querySelector("#concertInput").value;
   getConcertAPI(concertInputValue).then(searchResultsObject);
};


function searchParkAPI(event) {
   const parkInputValue = document.querySelector("#park").value;
   getParksAPI(parkInputValue).then(searchResultsObject)
}