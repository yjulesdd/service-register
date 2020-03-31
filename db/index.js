import {makeDb} from '../src/data-access';

(async function setupDb(){
    console.log('Setting up database...')

    const db = await makeDb();
    const res = await db.collection('services');
  
    console.log(res);
    console.log('DataBase setup complete ...');
    process.exit();
    
}
)();
