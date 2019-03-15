//Main Page Functions

createDOM();

const concertButton = document.querySelector("#concertButton");

concertButton.addEventListener("click", searchConcertAPI);

const parkButton = document.querySelector("#parkButton");

parkButton.addEventListener("click", searchParkAPI);

const eventButton = document.querySelector("#eventButton");

eventButton.addEventListener("click", searchEventAPI);

const restaurantButton = document.querySelector("#restaurantButton");

restaurantButton.addEventListener("click", searchRestaurantAPI);