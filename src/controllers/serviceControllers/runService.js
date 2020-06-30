const axios = require('axios').default;

export default function makeRunService({listService, tokenValidation}){

    return async function runService(httpRequest){
        
        try{
            const {source = {},token = {}, serviceName,request = '', method = 'get', params = {}} = httpRequest.body;

            if(!token || Object.keys(token).length === 0 && token.constructor === Object){

                
                throw new Error ('Vous n\'êtes pas authentifié !!!');
            }else{
                
                const isValidate = await tokenValidation.validateToken({token});
                

                if(isValidate){
                    const userInfo = await tokenValidation.getTokenInfo({token});
                    
                    if(userInfo.data.userAccesses[serviceName] && userInfo.data.userAccesses[serviceName][request] === true){
                        const toServe = await listService({serviceName});
                        debugger
                        if(!toServe){
                            throw('Ce service n\'existe pas ');
                        }

                        debugger
                        const routeToserve = toServe.routes.filter(route => route.name === request);
                        if(!routeToserve){
                            throw('Cette route n\'existe pas');
                        }
                        debugger

                        const result = await axios({
                            url: routeToserve[0].externalLink,
                            method: routeToserve[0].method,
                            headers:{
                                'Content-Type': 'application/json'
                            },
                            params:{
                                ...params
                            }
                        })



                        return {
                            headers:{
                                'Content-type': 'application/json',
                            },
                            statusCode: 400,
                            body:{
                                ...result.data
                            }
                        }

                    }

                    throw new Error("Vous n'avez pas accès à cette route");
                }else{
                    throw new Error('Veuillez vous reconnecter pour obtenir un nouveau token')
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
                    error: e.response ? e.response.data.error : e.message
                }

            }
        }
    }
}


