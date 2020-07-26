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
                        
                        if(!toServe){
                            throw new Error('Ce service n\'existe pas ');
                        }

                        
                        const routeToserve = toServe.routes.filter(route => route.name === request);
                        if(!routeToserve || routeToserve.length <= 0){
                            throw new Error('Cette route n\'existe pas');
                        }
                        
                        try{

                            debugger
                            const result = await axios({
                                url: routeToserve[0].externalLink,
                                method: routeToserve[0].method,
                                headers:{
                                    'Content-Type': 'application/json'
                                },
                                data :{
                                    user : { ...userInfo} ,
                                    ...params
                                },
                            })

                            debugger
    
                            return {
                                headers:{
                                    'Content-type': 'application/json',
                                },
                                statusCode: 200,
                                body:{
                                    ...result.data
                                }
                            }

                        }catch(err){

                            debugger
                            return {
                                headers:{
                                    'Content-type': 'application/json',
                                },
                                statusCode: 400,
                                body:{
                                    error: err.response.data.error
                                }
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


