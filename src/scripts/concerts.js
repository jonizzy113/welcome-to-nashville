// // queries ticketmaster API for Nashville Concerts and returns an Array of Arrays which include the artist name and event date

const getConcertAPI = (keyword) => {
   return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&size=10&apikey=jSWyAXpUAgvbhTQCtCaIYdCfWf356IYR&classificationName=music&keyword=${keyword}`)
      .then(response => response.json()).then(data => {
         const concertInfo = data._embedded.events;
         return concertInfo
      }).then(data => {
         const artistList = data.map(element => {
            const combo = [element.name, element._embedded.venues[0].name]
            return combo;

         }); return artistList
      })
}
