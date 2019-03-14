function searchAPI(event) {
        const concertInputValue = document.querySelector("#concertInput").value;
        getConcertAPI(concertInputValue).then(searchResultsObject);
};


function searchParkAPI(event) {
        const parkInputValue = document.querySelector("#park").value;
        getParksAPI(parkInputValue).then(searchResultsObject)
}

function searchRestaurantAPI(event) {
        const restaurantInputValue = document.querySelector("#restaurantInput").value;
        getRestaurantAPI(restaurantInputValue).then(data => {
                searchResultsObject(data, "restaurant")
        });
}