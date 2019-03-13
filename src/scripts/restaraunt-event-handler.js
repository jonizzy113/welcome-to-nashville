const searchButton = document.querySelector("#restaurantButton")
const restaurantInput = document.querySelector("#restaurantInput")
const key = "f86bf5c13d03c028aafe4818c8c4aa41"

searchButton.addEventListener("click", () => {
        console.log(restaurantInput.value)
        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${restaurantInput.value}`, {
                headers: {
                        "Accept": "application/json",
                        "user-key": "f86bf5c13d03c028aafe4818c8c4aa41"
                }
        })
                .then(results => results.json())
                .then(results => {
                        console.log(results)
                })
})
