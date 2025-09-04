/*************************************
 * Import MongoDB connection
*************************************/
const { connectDb, getDb } = require('../database/connection');
const { newListing, newListings } = require('../database/document');

/*************************************************************
 * Performing Crud(create,read,update,delete)
 *************************************************************/
async function runConnect() {
    try {
        await connectDb("sample_airbnb");

        await createListing();

        await createMultipleListings();
    } catch (e) {
        console.error(e)
    }
}

// inserting using insertOne()
async function createListing() {
        const db = getDb();
        // INSERT
        const result = await db.collection("listingsAndReviews").insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);
}
async function createMultipleListings() {
    const db = getDb();
    const result = await db.collection("listingsAndReviews").insertMany(newListings);

    console.log(`${result.insertCounted} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);
}

runConnect();