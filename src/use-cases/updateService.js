

export default function makeUpdateService({serviceDb}){
    return async function updateService({id, ...changes} = {}){

        console.log(id);

        if(!id){
            throw new Error('you must supply a service Id')
        }


        const updated =  await serviceDb.update({id, ...changes});

        return updated;
    }
}