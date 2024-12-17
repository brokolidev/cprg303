import {SQLiteDatabase} from "expo-sqlite";

/**
 * Creates the tables for the application
 * 
 * @param {SQLiteDatabase} db 
 */
export const createTables = async (db) => {

	const userPreferencesQuery = `
    CREATE TABLE IF NOT EXISTS UserPreferences (
        id INTEGER DEFAULT 1,
        userName TEXT,
        defaultAvatar TEXT,
        PRIMARY KEY(id)
    )
    `

	const insertDefaultQuery = `
	INSERT INTO UserPreferences (userName, defaultAvatar) values ('John', 'avatar3')
	`

    const mslEventQuery = `
    CREATE TABLE IF NOT EXISTS mslEvent (
	    id	INTEGER,
	    start	TEXT NOT NULL,
	    end	TEXT NOT NULL,
        title TEXT NOT NULL,
	    description	TEXT,
	    PRIMARY KEY("id" AUTOINCREMENT)
    )
    `

	try {

        //Initialize the database with the tables needed
		await db.execAsync(userPreferencesQuery);
        await db.execAsync(mslEventQuery);

        //get the default preferences to show the user
		const defaultPref = await db.getFirstAsync('SELECT * FROM UserPreferences');

        //insert default preferences if none were found.
		if(defaultPref === null) {
			// insert default data
			await db.execAsync(insertDefaultQuery);
		} else {
			console.log('default profile', defaultPref);
		}
        
	} catch (error) {
		console.error(error);
		throw Error(`Failed to create tables`);
	}
}
