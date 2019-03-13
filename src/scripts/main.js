//Main Page Functions

createDOM();

const concertButton = document.querySelector("#concertButton")
const parkButton = document.querySelector("#parkButton")


concertButton.addEventListener('click', searchAPI);
parkButton.addEventListener('click', searchParkAPI);