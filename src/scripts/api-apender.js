
let iteniraryContainer = document.querySelector("#itenirary-container")



const buildHtmlForItenirary = iteniraryObject => {
   iteniraryContainer.appendChild(buildElementWithText("p", iteniraryObject.park, "domItenirary"));
   iteniraryContainer.appendChild(buildElementWithText("p", iteniraryObject.restaurant, "domItenirary"));
   iteniraryContainer.appendChild(buildElementWithText("p", iteniraryObject.event, "domItenirary"));
   iteniraryContainer.appendChild(buildElementWithText("p", iteniraryObject.concert, "domItenirary"));


}

const pullItenirary = () => {
   return fetch("http://localhost:8088/itinerary")
      .then(response => response.json())
}

const appendItenirarytoDom = iteniraryArray => {

   iteniraryArray.forEach(itenirary => {
     buildHtmlForItenirary(itenirary);
   });

}

pullItenirary().then(parsedResponse => appendItenirarytoDom(parsedResponse));