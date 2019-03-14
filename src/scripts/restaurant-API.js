
const getRestaurantAPI = (keyword) => {
        return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${keyword}`, {
                headers: {
                         Accept: "application/json",
                         "user-key": "8ee4b852db1b6e2be24fa391c91541db"
                        }
                }
        )
        .then(r => r.json())
        .then(results => {
                const restResults = results.restaurants
                const restArray = restResults.map(details => {
                        const restCombo = details.restaurant;
                        return restCombo;
                }); return restArray
        }).then(data => {
                const comboData = data.map(info => {
                        comboInfo = [info.name, info.location.address]
                        return comboInfo;
                });
                return comboData.slice(0,10);
        })
        };