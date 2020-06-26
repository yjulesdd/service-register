import Id from '../Id';

export default function makeRegisterDb({makeDb}){
   

   async function insert({id: _id = Id.makeId(),...serviceInfo}){
        const db = await makeDb();

        

        const result = await db.collection('services').insertOne({_id, ...serviceInfo});        
        const { _id: id, ...insertedInfo } = result.ops[0];

        return {id, ...insertedInfo}
    }

    async function update({id:_id, ...serviceInfo}){
        
        const db = await makeDb();
        const result = await db.collection('services').updateOne({_id},{$set:{...serviceInfo}});
        return result.modifiedCount > 0 ? {id: _id, ...serviceInfo} : null;
    }

    async function remove({id: _id}){
        const db = await makeDb();
        const result = await db.collection('services').deleteOne({_id});

        return result.deletedCount;
    }

    async function findAll(){
        const db = await makeDb();
        const result = await db.collection('services').find({});

        return (await result.toArray()).map(({_id: id, ...found}) => ({id, ...found}));
    }

    async function findById({id: _id}){
        const db = await makeDb();
        const result = await db.collection('services').find({_id});
        const found = await result.toArray();

        

        if(found.length === 0){
            return null;
        }

        const {_id:id , ...info } = found[0];
        return {id, ...info};
    }

    async function findByName({serviceName}){
        const db = await makeDb();
        const result = await db.collection('services').findOne({serviceName});
        
        if(result){

            const {_id:id , ...info } = result;
            return {id, ...info};
        }

        return false;
    }

    async function findByAddress({serviceAddress}){
        const db = await makeDb();
        const result = await db.collection('services').findOne({serviceAddress});
        
        if(result){

            const {_id:id , ...info } = result;
            return {id, ...info};
        }

        return false;
    }

    async function findByPort({servicePort}){
        
        const db = await makeDb();
        const result = await db.collection('services').findOne({servicePort});
        
        if(result){

            const {_id:id , ...info } = result;
            return {id, ...info};
        }

        return false;
    }

    return Object.freeze({
        insert,
        update,
        remove,
        findById,
        findByName,
        findAll,
        findByAddress,
        findByPort
    })
} 

