import { MongoClient } from 'mongodb'
import "dotenv/config";

// Connection URL
const url = process.env.DB_URL;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_NAME;

const connection = async () => {
    try {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('users');
    } catch (error) {
        console.log('Connected error to server', error);
    } finally {
        client.close();
    }
}

export default connection;