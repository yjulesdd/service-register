require('dotenv').config();

import mongodb from 'mongodb';
const MongoClient = new mongodb.MongoClient("mongodb://register-service:123456789@160.120.188.248:27017/register",{useUnifiedTopology: true});

let  connection, db;

export default async function makeDb(){
    connection = connection ||(await MongoClient.connect());

    db = db || (await connection.db('register'));
    return db;
}


export async function closeDb(){
    await db.close();
}

export async function clearDb(){
    const res = await makeDb(); 
    await res.collection('services').deleteMany({});
    return true;
}

export {
    db
}
