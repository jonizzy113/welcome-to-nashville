

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
     }); return eventsCombo.slice(0,10);
   })}
