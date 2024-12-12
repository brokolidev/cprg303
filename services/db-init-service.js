import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system'

const dbInitDir = 'database/schema.sql'

const openDb = () => SQLite.openDatabaseAsync('MSL_db.db')

export const initDB = () => {
    //first, load in the sql file,
    return loadSQL()
        .then(sql => {
            if (sql != "") {
                //sql's good, send it off to the db to be initialized.
                return sql
            } else {
                const msg = "ERROR: invalid sql, unable to init db"
                console.error(msg)
                throw new Error(msg)
            }
        })
        .then(sql => {
            //making the call to the db to open. done asyncronously to prevent blocking of the main thread.
            return openDb()
                .then(db => {
                    //wrapping the query in a transaction
                    return db.withTransactionAsync(() => {
                        //attempt to initialize the db. this will ensure the database is loaded with the correct tables.
                        return db.execAsync(sql)
                            .then(_ => {
                                return true
                            })
                    })
                })
        })
        .catch(err => {
            const msg = "ERROR: initDB: " + err
            console.error(msg)
            throw new Error(msg)
        })
}

const loadSQL = () => {
    return FileSystem.readAsStringAsync(FileSystem.documentDirectory + dbInitDir)
        .catch(err => {
            console.error("ERROR: loadSQL: an error occurred while trying to load the SQL file: "
                + err)
        })
}
