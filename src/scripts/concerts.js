const getConcertApi = (music) => {
   // CM: fetch api data Using the keys City = Nashville, Classification = Music, and finally the keyword being the argument
   return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&size=10&apikey=jSWyAXpUAgvbhTQCtCaIYdCfWf356IYR&classificationName=music&keyword=${music}`)
      //CM: Take that data and Translates it into javascript  
      .then(musicResponse => musicResponse.json())
      .then(response => {
         // CM: Take the data and set a variable equal to the array I need to target in order to us .map method     
         const concertInfo = response._embedded.events;
         return concertInfo
      })
      .then(data => {
         //CM: Used .map method in order to target specefic keys and put them into an array
         const venueInfo = data.map(musicArrays => {
            const combo = [musicArrays.name, musicArrays._embedded.venues[0].name]
            return combo;

         })
         return venueInfo;
      })


}

getConcertApi("rap")