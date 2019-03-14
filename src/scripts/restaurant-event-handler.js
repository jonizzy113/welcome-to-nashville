


























































const key = "f86bf5c13d03c028aafe4818c8c4aa41"

const getRestaurantAPI = (restaurantInputValue) => {
        return fetch(
                `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${restaurantInputValue}`, {
                        headers: {
                                Accept: "application/json",
                                "user-key": key
                        }
                }
        )
                .then(r => r.json())
                .then(results => {
                        const restResults = results.restaurants
                        console.log(restaurantInputValue)
                        console.log(results)
                        const restArray = restResults.map(details => {
                                const restCombo = details.restaurant;
                                console.log(details)
                                return restCombo;
                        }); return restArray
                }).then(data => {
                        const comboData = data.map(info => {
                                comboInfo = [info.name, info.location.address]
                                return comboInfo;
                        }); return comboData;
                })
};