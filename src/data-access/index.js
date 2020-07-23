import makeRegisterDb from "./register-db";
import mongodb from 'mongodb';



const MongoClient = mongodb.MongoClient;
const url = "mongodb://"+process.env.DB_USERNAME+':'+process.env.DB_PASSWD+'@'+process.env.DB_IP_ADDRESS+':'+ process.env.DB_PORT+'/'+process.env.DB_NAME;
const client = new MongoClient( url, {useUnifiedTopology: true });


export async function makeDb () {

    if (!client.isConnected()) {
      await client.connect();
    }
    return client.db(process.env.DB_NAME);
}

const registerDb = makeRegisterDb({makeDb});

export default registerDb;