const getParkAPI = (park1) => {
    return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${park1}=Yes`)
        .then(parks => parks.json())
        .then(data => {
            const parkInfo = data.map(element => {
                const comboInfo = [element.park_name, element.mapped_location_address]
                return comboInfo
            }); return parkInfo
        })
};
