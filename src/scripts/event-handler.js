//following 4 functions are used in by event listners on the input form's 4 searches. they query their respective API's using the input value the user has enters. then, they use that data as the parameter to run the SRO function defined in the dom-manager file. the second parameter is the designated API name which is used in the SRO function to give unique text and classes to the elements.

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


// listener function that uses event delegation, which is added to the section container rather that each individual search item. It adds search items to the itinerary list on DOM when clicked, it also adds a save button to DOM once all four list items are in the list.

function eventDelegation(e) {
   let target = e.target;
   let createResultList = document.querySelector("ol");
   //this runs through all the list items in the search results, which return as a nodelist . the Array.from creates an array list out of that nodelist, so it can be used in the next for each statement. 
   let list = document.querySelectorAll("li");
   let arrayList = Array.from(list);

   /*this function defines which item to add to the itinerary list, based on what API list is being displayed. it uses if statements in order to run the correct function for each search list.*/ 
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
   // this part of the event listener is used to add the input form and search button only when the itinerary is fully filled out, using an event listener and the saveDOM function defined on the dom-manager file. it uses an IF statement to only create the new elements when both condtions are met, in order to prevent duplicate elements being created. 
   
      let itemList = document.querySelectorAll("p").length;
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