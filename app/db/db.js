import {SQLiteDatabase} from "expo-sqlite";

export const createTables = async (db: SQLiteDatabase) => {
	const dropQuery = `DROP TABLE IF EXISTS UserPreferences`

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
	try {
		// await db.execAsync(dropQuery);
		await db.execAsync(userPreferencesQuery);

		const defaultPref = await db.getFirstAsync('SELECT * FROM UserPreferences');

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