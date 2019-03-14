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
         });
         return artistList.slice(0,10)
      })
}



const getParkAPI = (park1) => {
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



const getEventAPI = (keyword) => {
   return fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${keyword}&location.address=nashville&expand=venue&token=PWTYFCY4EA2D7ZA3SVWG`, {
         headers: {
            Accept: "application/json"
         }
      }
   ).then(r => r.json()).then(results => {
      const events = results.events;
      return events
   }).then(data => {
      const eventsCombo = data.map(info => {
         const combolist = [info.name.text, info.venue.address.localized_address_display]
         return combolist;
      });
      return eventsCombo
   }).then(data => {
      return data.slice(0,10)
   })
};


const getRestaurantAPI = (keyword) => {
   return fetch(
         `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${keyword}`, {
            headers: {
               Accept: "application/json",
               "user-key": "8ee4b852db1b6e2be24fa391c91541db"
            }
         }
      )
      .then(r => r.json())
      .then(results => {
         const restResults = results.restaurants
         const restArray = restResults.map(details=> {
           const restCombo = details.restaurant;
           return restCombo; 
         }); return restArray
      }).then(data => {
         const comboData = data.map(info => {
            comboInfo = [info.name, info.location.address]
            return comboInfo;
         }); return comboData.slice(0,10);
      })
};


