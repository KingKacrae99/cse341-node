/*************************************************************
 * NOTE: 
 * insertOne() = use to insert one document to the database
 * insertMany() = use to insert multiple document to the DB
 * bulkWrite() = use to perform insertOne,updateOne, deleteOne
 * at once.
 *************************************************************
 Mongo termnologies relating to SQL:
 Collections are Like Table.
 documents are like rows
 key-value(field) are like column
 *************************************************************/

/*******************************************
 *  Connect to database / import MongoClient
 *******************************************/
const { MongoClient } = require('mongodb');
require('dotenv').config()

//

/**********************************************************
 * Create async main function to connect to MongoDB cluster
 **********************************************************/

/************************************************************************************************
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
***********************************************************************************************/
const url = process.env.MONGODB_URL

let client;
let db;


/************************************************
* Connect to a DB
***********************************************/
async function connectDb(db_name) {
    if (db) return db;
    // Create an instance of MongoClient
    client = new MongoClient(
        url, {
            tls: true,
            tlsAllowInvalidCertificates: true
    });
    // use MongoClient to connect to our cluster.
    await client.connect();// client.connect() returns a promise.
        db = client.db(db_name)
        console.log("Connnected to MongoDB")
    return db

    //} finally {
        // close connection to cluster
        //await client.close();
    //}
}

function getDb() {
    if (!db) {
         throw new Error("❌ Database not initialized. Call connectToDb() first.");
    }
     return db;
}

/**************************************************************
* Implementing the listDatabase for retrieve a list of database
***************************************************************/
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(`-${db.name}`));
};




module.exports = {connectDb, getDb}