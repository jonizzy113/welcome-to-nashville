
const fieldsetCreator1 = (itItem) => {
    const formFieldSet1 = (buildElementWithText("fieldset"));
    formFieldSet1.appendChild(buildElementWithText("label", `Search for ${itItem}s: `));
    formFieldSet1.appendChild(parkSelectElement());
    formFieldSet1.appendChild(buildButtonElement(`${itItem}Button`, "Search", "searchButton"));
    return formFieldSet1;
};

buildOptionElement = (value, text, id) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    return option

}

const parkSelectElement = () => {
    const formSelect = document.createElement("select");
    formSelect.id = "park"
    formSelect.appendChild(buildOptionElement("dog_park", "Dog Park"));
    formSelect.appendChild(buildOptionElement("boat_launch", "Boat Launch"));
    formSelect.appendChild(buildOptionElement("skate_park", "Skate Park"));
    formSelect.appendChild(buildOptionElement("volleyball", "Volleyball"));
    formSelect.appendChild(buildOptionElement("tennis_courts", "Tennis Court"));
    return formSelect;
};



const getParksAPI = (park1) => {
    console.log(park1)
    return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${park1}=Yes`)
        .then(parks => parks.json())
        .then(data => {
            const parkInfo = data.map(element => {
                const comboInfo = [element.park_name, element.mapped_location_address]
                return comboInfo
            }); return parkInfo
        })
};
