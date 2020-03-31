export default function makeListService({serviceDb}){
    return async function listService({id} = {}){
         
        if(!id){
            throw  new Error("please supply a service Id");
        }


        const result =  await serviceDb.findById({id});
        return result;
    }
}