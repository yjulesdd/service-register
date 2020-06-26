export default function makeGetServices({listServices}){
    return async function getServices(httpRequest){
        const headers = {
            'Content-Type':'application/json',
        }

        try{
            const service = await listServices();

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