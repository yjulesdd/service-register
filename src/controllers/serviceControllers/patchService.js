export default function makePatchService({updateService}){
    return async function patchService(httpRequest){
        
        
        try{

            const { source = {}, ...serviceInfo } = httpRequest.body;
            const toUpdate = {id:httpRequest.params.id, ...serviceInfo};

            
            const updated = await updateService(toUpdate);

            return{
                headers:{
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                body: {updated}

            }
        }catch(e){
            console.log(e);

            return{
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}