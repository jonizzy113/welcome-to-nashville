

// // queries ticketmaster API for Nashville Concerts and returns an Array of Arrays which include the artist name and event date

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

// console.log(getConcertAPI())

// const getParksAPI = () => {
//    return fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=2Y38BxOLg7C4PZMAg91ob4maW")
//       .then(response => response.json()).then(data => {
//          const parkInfo = data.map(element => {
//           const comboInfo = [element.park_name, element.mapped_location_address]
//           return comboInfo
//          }); return parkInfo})};

//        console.log(getParksAPI())

// fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating", {
//    headers: {
//       "Accept": "application/json",
//       "user-key": "f86bf5c13d03c028aafe4818c8c4aa41"
//    }
// })
//    .then(r => r.json())
//    .then(results => console.log((results)))
