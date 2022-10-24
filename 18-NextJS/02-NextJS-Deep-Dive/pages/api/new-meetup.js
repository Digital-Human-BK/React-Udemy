import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = new MongoClient(process.env.MONGODB);
    
    try {
      const db = client.db('next-app');
      const meetupsCollection = db.collection('meetups');

      const result = await meetupsCollection.insertOne(data);
      console.log(result);      

      res.status(201).json({ message: 'Meetup inserted successfully' });
    } catch (error) {
      console.log(error.message);
    } finally {
      await client.close();
    }
  }
}

export default handler;
