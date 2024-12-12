/*
 * NOTE: To prevent the unwanted refresh of the db each time the app is opened,
 *       this file is only run upon first initialization of the db. if the program
 *       detects that there are already tables in the database, it will skip
 *       execution of the file.
 *
 *       If you have modified this file, and need to work with the changes,
 *       make a copy of your data within the database, remove the database,
 *       and reload the application. This will refresh the database and run
 *       this file again.
 *
 *       Also, If you do modify this file, please add an entry to the modification
 *       list below. that way, we can keep track of what is happenning with the
 *       database, and everyone else will be alerted of changes to the db.
 *
 *
 * MODIFICATIONS
 * NAME                 DATE        DESCRIPTION
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Ethen Mitterhuber    12/12/2024  Initial creation of file, along with
 *                                  MSL_User & MSL_Event table.
 */


-- CREATE THE MSL_USER TABLE FOR STORING INFORMATION ABOUT THE USER
-- shouldn't need anything too advanced right now. just add the user,
-- and they can use their name or email to log in. 
CREATE TABLE "MSL_User" (
    "id" INTEGER,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "avatar_link" TEXT,
    PRIMARY KEY("id" AUTOINCREMENT)
);


-- CREATE THE MSL_EVENT TABLE FOR STORING CALENDAR EVENTS
CREATE TABLE "MSL_Event" (
	"id"	INTEGER,
	"start_time"	TEXT NOT NULL,
	"end_time"	TEXT NOT NULL,
	"description"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);

-- Any other tables needed can go here. If we are persisting the time entries for the timer,
-- a table will probably be needed here.
