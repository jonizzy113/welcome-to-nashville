
let itineraryContainer = document.querySelector("#itinerary-container")



const buildHtmlForitinerary = itineraryObject => {
   itineraryContainer.appendChild(buildElementWithText("p", itineraryObject.park, "domitinerary"));
   itineraryContainer.appendChild(buildElementWithText("p", itineraryObject.restaurant, "domitinerary"));
   itineraryContainer.appendChild(buildElementWithText("p", itineraryObject.event, "domitinerary"));
   itineraryContainer.appendChild(buildElementWithText("p", itineraryObject.concert, "domitinerary"));
};

const pullItinerary = () => {
   return fetch("http://localhost:8088/itinerary")
      .then(response => response.json())
}

const appendItinerarytoDom = itineraryArray => {

   itineraryArray.forEach(itinerary => {
     buildHtmlForitinerary(itinerary);
   });

}

pullItinerary().then(parsedResponse => appendItinerarytoDom(parsedResponse));
