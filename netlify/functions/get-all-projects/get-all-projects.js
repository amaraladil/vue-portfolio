// netlify/functions/get-all-projects.js
const { MongoClient } = require("mongodb");

exports.handler = async function (event, context) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  try {
    await client.connect();

    const database = client.db("projects");
    const projects = database.collection("projects2");
    const options = {
      sort: { _id: 1 }, // Replace 'columnName' with the actual column name you want to sort by
    };

    const allProjects = await projects.find({}, options).toArray();

    return { statusCode: 200, body: JSON.stringify(allProjects) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  } finally {
    await client.close();
  }
};
