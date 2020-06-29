export default function makeRunService({listService, tokenValidation}){

    return async function runService(httpRequest){
        debugger
        try{
            const {source = {},token = {}, ...info} = httpRequest.body;

            if(!token || Object.keys(token).length === 0 && token.constructor === Object){

                throw new Error ('Vous n\'êtes pas authentifié !!!');
            }else{
                const isValidate = await tokenValidation.validateToken({token});

                if(isValidate){
                    const userInfo = await tokenValidation.getTokenInfo({token});
                }


            }




        }catch(e){
            debugger
            return {
                headers: {
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


