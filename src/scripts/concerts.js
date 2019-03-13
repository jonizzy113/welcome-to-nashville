fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=APfBcMgG2QAruAIEf4QdWufwmohZrK3Z")
    .then(concert => concert.json())
    .then(parsedConcert => {
        const arrayConcert = parsedConcert._embedded
        arrayConcert.forEach(element => {
            console.log(element.name)
            
        });
    })