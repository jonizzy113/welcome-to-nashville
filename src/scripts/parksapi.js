// list of keys to target
// dog_park
// boat_launch
// skate_park
// volleyball
// tennis_courts

// fetch("https://data.nashville.gov/resource/xbru-cfzi.json?dog_park=Yes")
// .then(parks => parks.json())
// .then (parsedparks => {
//     console.log(parsedparks)
// })


buildOptionElement = (value, text) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    return option
}

const parkSelectElement = () => {
    const formSelect = document.createElement("select");
    formSelect.appendChild(buildOptionElement("dog_park", "Dog Park"));
    formSelect.appendChild(buildOptionElement("boat_launch", "Boat Launch"));
    formSelect.appendChild(buildOptionElement("skate_park", "Skate Park"));
    formSelect.appendChild(buildOptionElement("volleyball", "Volleyball"));
    formSelect.appendChild(buildOptionElement("tennis_courts", "Tennis Court"));
};



const getParksAPI = (dropDownValue) => {
    return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${dropDownValue}=Yes`)
        .then(parks => parks.json())
        .then(data => {
            const parkInfo = data.map(element => {
                const comboInfo = [element.park_name, element.mapped_location_address]
                return comboInfo
            }); return parkInfo
        })
};

        // console.log(getParksAPI());




// trying different functions
//  const getParksAPI = (dropDownValue) => {
//        return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${dropDownValue}=Yes`)
//           .then(parks => parks.json()).then(data => {
//              const parkInfo = (element => {
//               const comboInfo = [element.park_name, element.mapped_location_address]
//               return comboInfo
//              }); return parkInfo})};

//            console.log(getParksAPI())
