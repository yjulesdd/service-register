export default function makeGetService({listService}){
    return async function getService(httpRequest){
        const headers = {
            'Content-Type':'application/json',
        }

        try{
            const service = await listService({
                id: httpRequest.query.id
            });

            return{
                headers,
                statusCode: 200,
                body: service
            }
        }catch(e){
            console.log(e);
            return{
                statusCode: 400,
                body:{
                    error:e.message   
                }
            }
        }
    }
} 