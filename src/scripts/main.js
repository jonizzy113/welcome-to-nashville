//Main Page Functions

createDOM();

<<<<<<< HEAD
const concertButton = document.querySelector("#concertButton");
=======
const concertButton = document.querySelector("#concertButton")
const parkButton = document.querySelector("#parkButton")
const restaurantButton = document.querySelector("#restaurantButton")
>>>>>>> master

concertButton.addEventListener("click", searchConcertAPI);


const parkButton = document.querySelector("#parkButton");

parkButton.addEventListener("click", searchParkAPI);

const eventButton = document.querySelector("#eventButton");

eventButton.addEventListener("click", searchEventAPI);

const restaurantButton = document.querySelector("#restaurantButton");

restaurantButton.addEventListener("click", searchRestaurantAPI);

<<<<<<< HEAD
=======
concertButton.addEventListener('click', searchAPI);
parkButton.addEventListener('click', searchParkAPI);
restaurantButton.addEventListener("click", searchRestaurantAPI)
>>>>>>> master
