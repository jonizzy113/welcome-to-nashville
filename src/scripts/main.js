//Main Page Functions

createDOM();

const concertButton = document.querySelector("#concertButton")
const parkButton = document.querySelector("#parkButton")
const restaurantButton = document.querySelector("#restaurantButton")


concertButton.addEventListener('click', searchAPI);
parkButton.addEventListener('click', searchParkAPI);
restaurantButton.addEventListener("click", searchRestaurantAPI)
