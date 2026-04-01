const { MongoClient } = require('mongodb');

let db;

async function connectDB() {
  const client = new MongoClient(//hardcoded DB URL for whoever set the DB up);
  await client.connect();
  db = client.db("knightswap");
  console.log("Auth Connection to MongoDB");
}

function getDB() {
  return db;
}

module.exports = {connectDB, getDB};
