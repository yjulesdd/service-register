
export default function makeRemoveService({serviceDb}){
    return async function removeService({id} = {}){
        
        if(!id){
            throw new Error ('You must supply an Id')
        }

        const toDelete = await serviceDb.findById({id});

        if(!toDelete){
            return nothingToDelete();
        }
        
        return hardDelete(toDelete);
    }


    function nothingToDelete(){
        return{
            deletedCount:0,
            message: 'there is noting to delete'
        }
    }
    async function hardDelete(toDelete){
        const result = await serviceDb.remove(toDelete);

        return {
            deletedCount: result,
            message: 'Service deleted'
          }
    }
}