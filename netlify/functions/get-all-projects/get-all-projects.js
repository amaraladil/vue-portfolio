// netlify/functions/get-all-projects.js
const { MongoClient } = require('mongodb');

exports.handler = async function (event, context) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  try {
    await client.connect();

    const database = client.db('projects');
    const projects = database.collection('projects');

    const allProjects = await projects.find({}).toArray();

    return { statusCode: 200, body: JSON.stringify(allProjects) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  } finally {
    await client.close();
  }
};