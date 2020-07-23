export default function makePostService({addService}){
    return async function postService(httpRequest){

        try{
            const { source = {}, ...serviceInfo } = httpRequest.body;
            const posted = await addService({...serviceInfo});
            
           

            return {
                headers:{
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: {posted}
            }

        }catch(e){
            console.log(e);

            return{
                headers:{
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body:{
                    error: e.message
                }
            }
        }
    }

}