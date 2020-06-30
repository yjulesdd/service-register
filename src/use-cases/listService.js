export default function makeListService({serviceDb}){
    return async function listService({id = {}, serviceName = {}}){

        if(!id && !serviceName){
            throw  new Error("Vous devez fournir un Id ou un serviceName");
        }

        const result =  await serviceDb.findById({id}) || await serviceDb.findByName({serviceName});
        return result;

        
    }
}