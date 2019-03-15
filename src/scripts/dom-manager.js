//three DOM contructor functions

const buildElementWithText = (elementType, elementTextContent, elementID) => {
        let htmlElement = document.createElement(elementType);
        htmlElement.textContent = elementTextContent;
        htmlElement.id = elementID;
        return htmlElement;
};

const buildInputElement = (elementType, elementId) => {
        let htmlElement = document.createElement("input");
        htmlElement.type = elementType;
        htmlElement.id = elementId;
        return htmlElement;
};

const buildButtonElement = (elementId, elementText, elementClass) => {
        let button = document.createElement("button");
        button.id = elementId;
        button.setAttribute("type", "submit");
        button.textContent = elementText;
        button.classList.add(elementClass);
        return button;
}



const mainCont = document.querySelector(".main-container");

//function that creates the template for building input fields 
const fieldsetCreator = (itItem) => {

  const formFieldSet = (buildElementWithText("fieldset"));
  formFieldSet.appendChild(buildElementWithText("label", `Search for ${itItem}s: `));
  const inputElement = buildInputElement("text", `${itItem}Input`);
  inputElement.setAttribute("placeholder", "Enter a keyword");
  formFieldSet.appendChild(inputElement);
  formFieldSet.appendChild(buildButtonElement(`${itItem}Button`, "Search", "searchButton"));
  return formFieldSet;
};

//following functions are for creating and formatting the dropdown menu. 

const dropdownCreator = (itItem) => {
        const formFieldSet1 = (buildElementWithText("fieldset"));
        formFieldSet1.appendChild(buildElementWithText("label", `Search for ${itItem}s: `));
        formFieldSet1.appendChild(parkSelectElement());
        formFieldSet1.appendChild(buildButtonElement(`${itItem}Button`, "Search", "searchButton"));
        return formFieldSet1;
};

const buildOptionElement = (value, text, id) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        return option;
};

const parkSelectElement = () => {
        const formSelect = document.createElement("select");
        formSelect.id = "parkInput";
        formSelect.appendChild(buildOptionElement("dog_park", "Dog Park"));
        formSelect.appendChild(buildOptionElement("boat_launch", "Boat Launch"));
        formSelect.appendChild(buildOptionElement("skate_park", "Skate Park"));
        formSelect.appendChild(buildOptionElement("volleyball", "Volleyball"));
        formSelect.appendChild(buildOptionElement("tennis_courts", "Tennis Court"));
        return formSelect;
};

//function that creates the input form section and append to DOM
const buildInputForm = () => {
  const formSection = document.createElement("form");
  formSection.id = "form-container";
  formSection.setAttribute("onsubmit", "return false");
  formSection.appendChild(dropdownCreator("park"));
  formSection.appendChild(fieldsetCreator("restaurant"));
  formSection.appendChild(fieldsetCreator("event"));
  formSection.appendChild(fieldsetCreator("concert"));
  mainCont.appendChild(formSection);

};


//function to create initial HTML structures
const createDOM = () => {

  mainCont.appendChild(buildElementWithText("h1", "Nashville Itinerary Planner"));
  buildInputForm();
  const searchContainer = buildElementWithText("section", "", "search-container");
  searchContainer.addEventListener("click", eventDelegation);
  mainCont.appendChild(searchContainer);
  buildItineraryContainer();
  mainCont.appendChild(buildElementWithText("section", "", "storeItineraries"))
};

//function to create the structure of the ITcontainer which is used in the initial create DOM function.
const buildItineraryContainer = () => {
  const itineraryContainer = (buildElementWithText("section", "", "itinerary-container"));
  itineraryContainer.appendChild((buildElementWithText("div", "Park:", "park-container")));
  itineraryContainer.appendChild((buildElementWithText("div", "Restaurant:", "restaurant-container")));
  itineraryContainer.appendChild((buildElementWithText("div", "Event:", "event-container")));
  itineraryContainer.appendChild((buildElementWithText("div", "Concert:", "concert-container")));
  mainCont.appendChild(itineraryContainer);
}

/*function that accepts an array of arrays, creates the structure for the search results, and appends them to the dom when the search button is clicked.*/
const searchResultsObject = (array, API) => {
  const searchContainer = document.querySelector("#search-container");
  //this while loop clears the results each time a search is made.
  while (searchContainer.firstChild) {
    searchContainer.removeChild(searchContainer.firstChild);
  }
  const createResultList = (buildElementWithText("ol", "Click item to add:", API));
  //this foreach loop is used to run through the data from the API, and format each item into the correct html structure, along with adding individual ID's for each list item. 
  array.forEach((obj, index) => {
    const createListItem = buildElementWithText("li", obj.join(" : "), `${API}Item${index}`);
    createListItem.classList.add(`${API}P`);
    const createSpan = buildElementWithText("span", "", index);
    createSpan.appendChild(createListItem);
    createResultList.appendChild(createSpan);
    searchContainer.appendChild(createResultList);

  });

};




//the following four functions are used to create the specific itinerary items, and only allow one item per category to be posted in the list. it also adds the text of the parent node back instead of letting it be replaced. 

const buildParkItems = (string, ID) => {

  const parkContainer = document.querySelector("#park-container");
  const createParkItem = buildElementWithText("p", string, ID);
  while (parkContainer.firstChild) {
    parkContainer.removeChild(parkContainer.firstChild);
  };
  parkContainer.textContent = "Park:"
  parkContainer.appendChild(createParkItem);
};

const buildRestaurantItems = (string, ID) => {
  const restaurantContainer = document.querySelector("#restaurant-container");
  const createRestaurantItem = buildElementWithText("p", string, ID);
  while (restaurantContainer.firstChild) {
    restaurantContainer.removeChild(restaurantContainer.firstChild);
  };
  restaurantContainer.textContent = "Restaurant:"
  restaurantContainer.appendChild(createRestaurantItem);
};

const buildEventItems = (string, ID) => {

  const eventContainer = document.querySelector("#event-container");
  const createEventItem = buildElementWithText("p", string, ID);
  while (eventContainer.firstChild) {
    eventContainer.removeChild(eventContainer.firstChild);
  };
  eventContainer.textContent = "Event:"
  eventContainer.appendChild(createEventItem);

};

const buildConcertItems = (string, ID) => {

  const concertContainer = document.querySelector("#concert-container");
  const createConcertItem = buildElementWithText("p", string, ID);
  while (concertContainer.firstChild) {
    concertContainer.removeChild(concertContainer.firstChild);
  };
  concertContainer.textContent = "Concert:"
  concertContainer.appendChild(createConcertItem);
};


//function that empties the fields in the itin conatainer
const emptyField = (element) => {
  let parent = element.parentNode
parent.removeChild(parent.childNodes[1])
}


//function that uses the search input's value to query our API and returns the content in an html format.

const retrieveIt = (name) => {
  const searchDiv = document.querySelector("#searchItineraries").value
  getItinerary(searchDiv).then(data => {
  let itemContainer = document.querySelector("#storeItineraries");
  itemContainer.appendChild(buildElementWithText("h3", searchDiv));
  data.forEach(key => {
    const item = buildElementWithText("p", key);
    itemContainer.appendChild(item);
  })
})};

// this function creates a new search input and sumbit button, which has an event listener function attached to it.  

const createItinerarySearch = () => {
  let itemContainer = document.querySelector("#storeItineraries");
  const apiSearch = buildInputElement("text", "searchItineraries");
  apiSearch.setAttribute("placeholder", "Search for itineraries by name");
  const searchDOMButton = buildButtonElement("saveDOM", "Search for an Itinerary")
      searchDOMButton.addEventListener("click", retrieveIt)
    itemContainer.appendChild(apiSearch);
    itemContainer.appendChild(searchDOMButton);

}

/* this function is used by the saveDomButton to query the items in the intinerary container and post them to our API. It then empties the fields in the container, and runs a function to create an Intinerary search */

const saveDOM = () => {
  const nameDiv = document.querySelector("#nameIt")
  if (nameDiv.value.length === 0) {
    alert("Please enter a name for your intinerary!")
  } else {
  const parkDiv = document.querySelector('#parkP')
  const restaurantDiv = document.querySelector('#restaurantP')
  const eventDiv = document.querySelector('#eventP')
  const concertDiv = document.querySelector('#concertP')
  const nameDiv = document.querySelector("#nameIt")


  let newItinerary = {
    Park: parkDiv.textContent,
    Restaurant: restaurantDiv.textContent,
    Event: eventDiv.textContent,
    Concert: concertDiv.textContent,
    Name: nameDiv.value
  };
  postItinerary(newItinerary)

emptyField(parkDiv)
emptyField(restaurantDiv)
emptyField(eventDiv)
emptyField(concertDiv)
nameDiv.value = ""
createItinerarySearch();

}
}

