import * as SQLite from "expo-sqlite"

const startDb = () => {
    return SQLite.openDatabaseAsync('cprg303')
}

export const getEvents = () => {
    const queryString = `
    SELECT * FROM mslEvent
    `;

    //get the db instance
    return startDb()
        .then(db => {
            //execute the query
            return db.getAllAsync(queryString)
                .then(response => {

                    const events = []

                    response.forEach(event => {
                        events.push({
                            start: new Date(event.start),
                            end: new Date(event.end),
                            title: event.title,
                            description: event.description,
                            imgSrc: event.imgSrc
                        })
                    })

                    return response;
                })
        })
        .catch(err => {
            const msg = "ERROR: getEvents: " + err;
            console.error(msg);
            throw new Error(msg);
        });
}

export const addEvent = (event) => {
    const queryString = `
    INSERT INTO mslEvent (start, end, title, imgSrc, description)
    VALUES ('${event.start}', '${event.end}', '${event.title}', '${event.imgSrc}', '${event.description}')
    `

    //start up the db.
    return startDb()
        .then(db => {
            return db.runAsync(queryString)
                .then(response => {
                    //return the first response. this should be the id
                    return response;
                });
        })
        .catch(err => {
            const msg = "ERROR: addEvent: " + err;
            console.error(msg);
            throw new Error(msg)
        })
}
