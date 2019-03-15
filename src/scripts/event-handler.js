
function searchParkAPI(event) {
   const parkInputValue = document.querySelector("#parkInput").value;
   getParkAPI(parkInputValue).then(data => {
      searchResultsObject(data, "park");
   });
}


function searchRestaurantAPI(event) {
   const restaurantInputValue = document.querySelector("#restaurantInput").value;
   getRestaurantAPI(restaurantInputValue).then(data => {
      searchResultsObject(data, "restaurant");
   });
}

function searchEventAPI(event) {
   const eventInputValue = document.querySelector("#eventInput").value;
   getEventAPI(eventInputValue).then(data => {
      searchResultsObject(data, "event");
   });
}

function searchConcertAPI(event) {
   const concertInputValue = document.querySelector("#concertInput").value;
   getConcertAPI(concertInputValue).then(data => {
      searchResultsObject(data, "concert");
   });
}


// listener function that adds search items to the itinerary list on DOM when clicked, it also adds a save button to DOM once all four list items are in the list.

function eventDelegation(e) {
   let target = e.target;
   let createResultList = document.querySelector("ol");
   let list = document.querySelectorAll("li");
   let arrayList = Array.from(list);
   arrayList.forEach(itineraryItem => {
      if (target === itineraryItem && createResultList.id === "park") {
         buildParkItems(itineraryItem.textContent, itineraryItem.className);
      };
      if (target === itineraryItem && createResultList.id === "restaurant") {
         buildRestaurantItems(itineraryItem.textContent, itineraryItem.className);
      };
      if (target === itineraryItem && createResultList.id === "event") {
         buildEventItems(itineraryItem.textContent, itineraryItem.className);
      };
      if (target === itineraryItem && createResultList.id === "concert") {
         buildConcertItems(itineraryItem.textContent, itineraryItem.className);
      };
   });  let itemList = document.querySelectorAll("p").length;
         let lastItem = document.querySelector("#concert-container")
      if (itemList === 4 && lastItem.nextElementSibling === null ) {
      let itemBox = document.querySelector('#itinerary-container')
      const nameInput = buildInputElement("text", "nameIt")
      nameInput.setAttribute("placeholder", "Name your itinerary")
      itemBox.appendChild(nameInput)
      
      const saveDOMButton = buildButtonElement("saveDOM", "Save Itinerary")
      saveDOMButton.addEventListener("click", saveDOM)

      itemBox.appendChild(saveDOMButton)}
};
