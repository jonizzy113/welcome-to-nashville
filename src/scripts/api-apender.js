
const postItinerary = (newList) => {
   return fetch("http://localhost:8088/itinerary", {
         method: "POST",
         body: JSON.stringify(newList),
         headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json"
         }
      })
      .then(response => response.json())
}


const getItinerary = (name) => {
   return fetch(`http://localhost:8088/itinerary?Name=${name}`)
      .then(response => response.json()).then(data => { 
         return Object.values(data[0]).slice(0, 4);
      })}


