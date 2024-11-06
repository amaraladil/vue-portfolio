// netlify/functions/fetchProjects.js
const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('portfolio'); // replace 'portfolio' with your database name
    const projects = database.collection('projects');
    const result = await projects.find().toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch projects' }),
    };
  } finally {
    await client.close();
  }
};