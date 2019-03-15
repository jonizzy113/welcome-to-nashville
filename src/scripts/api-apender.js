// let itineraryContainer = document.querySelector("#itinerary-container")



// const buildHtmlForitinerary = itineraryObject => {
//    itineraryContainer.appendChild(buildElementWithText("p", itineraryObject.park, "domitinerary"));
//    itineraryContainer.appendChild(buildElementWithText("p", itineraryObject.restaurant, "domitinerary"));
//    itineraryContainer.appendChild(buildElementWithText("p", itineraryObject.event, "domitinerary"));
//    itineraryContainer.appendChild(buildElementWithText("p", itineraryObject.concert, "domitinerary"));
// };

// const pullItinerary = () => {
//    return fetch("http://localhost:8088/itinerary")
//       .then(response => response.json())
// }

// const appendItinerarytoDom = itineraryArray => {

//    itineraryArray.forEach(itinerary => {
//      buildHtmlForitinerary(itinerary);
//    });

// }

// pullItinerary().then(parsedResponse => appendItinerarytoDom(parsedResponse));

const postItinerary = (newList) => {
   return fetch("http://localhost:8088/itinerary", {
         method: "POST",
         body: JSON.stringify(newList),
         headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json"
         }
      })
      .then(response => response.json())
}


const getItinerary = (getIt) => {
   return fetch("http://localhost:8088/itinerary")
      .then(response => response.json()).then(data => {
        let mapData = data.map(element => {
           const key = Object.values(element);
           return key   
         });
          return mapData.slice(0,5);
      
})};