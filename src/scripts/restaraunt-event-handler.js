const searchButton = document.querySelector("#restaurantButton")
// // const searchContainer = document.querySelector("#search-container")
const restaurantInput = document.querySelector("#restaurantInput")
// const key = "f86bf5c13d03c028aafe4818c8c4aa41"




function searchAPI(event) {
        const concertInputValue = document.querySelector("#concertInput").value;
        getConcertAPI(concertInputValue).then(searchResultsObject)
}

function resAPI() {

}
// searchButton.addEventListener("click", () => {
//         console.log(restaurantInput.value)
//         fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${restaurantInput.value}`, {
//                 headers: {
//                         "Accept": "application/json",
//                         "user-key": "f86bf5c13d03c028aafe4818c8c4aa41"
//                 }
//         })

//                 .then(results => results.json())
//                 .then(results => {
//                         console.log(results.restaurants[1].restaurant.name)
//                 })
// })

const getConcertAPI = (keyword) => {
        return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&size=10&apikey=jSWyAXpUAgvbhTQCtCaIYdCfWf356IYR&classificationName=music&keyword=${keyword}`)
                .then(response => response.json()).then(data => {
                        const concertInfo = data._embedded.events;
                        return concertInfo
                }).then(data => {
                        const artistList = data.map(element => {
                                const combo = [element.name, element.dates.start.localDate]
                                return combo;
                        }); return artistList
                })
}