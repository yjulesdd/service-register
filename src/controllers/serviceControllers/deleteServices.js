

export default function makeDeleteService({removeService}){
    return async function deleteService(httpRequest){

        const headers = {
            'Content-Type':'application/json',
        }
        
        try{
            const deleted = await removeService({id: httpRequest.query.serviceId});
            
            return{
                headers,
                statusCode: deleted.deletedCount === 0 ? 404 : 200,
                body:{deleted}
            }

        }catch(e){
            console.log(e);

            return {
                headers,
                statusCode: 400,
                body:{
                    error: e.message
                }

            }
        }
    }
}