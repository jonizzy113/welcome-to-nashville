


































const getEventAPI = (keyword) => {
  return fetch(
     `https://www.eventbriteapi.com/v3/events/search/?q=${keyword}&location.address=nashville&expand=venue&token=PWTYFCY4EA2D7ZA3SVWG`, {
        headers: {
           Accept: "application/json"
        }
     }
  ).then(r => r.json()).then(results => {
     const events = results.events;
    // console.log(events);   Test results from event object as well as get in to event area because .map only works with arrays - JH
     return events
     
  }).then(data => {
     const eventsCombo = data.map(info => {
        const combolist = [info.name.text, info.venue.address.localized_address_display]
       // console.log(combolist)  testing it is bringing out the two correct properties from the array I am trying to show for the data parameter - JH
        return combolist;
     }); 
     return eventsCombo
  }).then(data => {
     return data
  })
};

getEventAPI("meetups");


