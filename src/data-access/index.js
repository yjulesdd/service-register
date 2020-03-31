import makeRegisterDb from "./register-db";
import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
const url = "160.120.188.248";
const port = 27017;
const userName = 'register-service'
const pwd = 123456789;
const dbName = 'register';

const client = new MongoClient("mongodb://register-service:123456789@160.120.188.248:27017/register",{useUnifiedTopology: true });


export async function makeDb () {
    if (!client.isConnected()) {
      await client.connect();
    }
    return client.db(dbName);
}

const registerDb = makeRegisterDb({makeDb});

export default registerDb;