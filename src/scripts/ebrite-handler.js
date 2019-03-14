


const eventSearch = document.querySelector("#eventInput")
const eventButton = document.querySelector("#eventButton")
eventButton.addEventListener("click", ()=> {
   //console.log(eventSearch.value)
   fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventSearch.value}&location.address=nashville&token=5Q3DYW2NIIHRZTV4OJ6Z`, {
      headers: {
         Accept: "application/json"
      }
   }).then(response => response.json())
   .then(results=>{
       console.log(results)
   })
})