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
  formFieldSet.appendChild(buildInputElement("text", `${itItem}Input`));
  formFieldSet.appendChild(buildButtonElement(`${itItem}Button`, "Search", "searchButton"));
  // formFieldSet.appendChild(parkSelectElement())
  return formFieldSet;
};

//function that creates the input form section and append to DOM
const buildInputForm = () => {
  const formSection = document.createElement("form");
  formSection.id = "form-container";
  formSection.setAttribute("onsubmit", "return false");
  formSection.appendChild(fieldsetCreator1("park"));
  formSection.appendChild(fieldsetCreator("restaurant"));
  formSection.appendChild(fieldsetCreator("event"));
  formSection.appendChild(fieldsetCreator("concert"));
  // formSection.appendChild(parkSelectElement())
  mainCont.appendChild(formSection);
};

//function to create initial HTML structures
const createDOM = () => {
  mainCont.appendChild(buildElementWithText("h1", "Nashville Itinerary Planner"));
  buildInputForm();

  mainCont.appendChild(buildElementWithText("section", "", "search-container"));
  mainCont.appendChild(buildElementWithText("section", "", "itinerary-container"));
};


/*function that accepts an array of arrays, creates the structure for the search results, and appends them to the dom when the search button is clicked.*/
const searchResultsObject = (array, API) => {
  const searchContainer = document.querySelector("#search-container");
  while (searchContainer.firstChild) {
    searchContainer.removeChild(searchContainer.firstChild);
  }
  const createResultList = (buildElementWithText("ol", "Click item to add:", API));
  array.forEach((obj, index) => {
    const createListItem = buildElementWithText("li", obj.join(" : "), `${API}Item${index}`);
    createListItem.classList.add(API)
    const createSpan = buildElementWithText("span", "", index);
    createSpan.appendChild(createListItem);

    createResultList.appendChild(createSpan);
  });
  searchContainer.appendChild(createResultList);
}



// const buildItineraryForm = () => {

// }