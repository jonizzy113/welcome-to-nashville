
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


function eventDelegation(e) {
   let target = e.target;
   let createResultList = document.querySelector("ol");
   let list = document.querySelectorAll("li");
   let arrayList = Array.from(list);
   buildElementWithText("section")
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
   });
};