const axios = require('axios').default;
require('dotenv').config()

export default function makeValidateToken({} = {}){
    return async function validateToken({token}){
       
        try{
            return await axios({
                method: "post",
                url: process.env.AUTHORIZATION_SERVER_ADDRESS+':'+process.env.AUTHORIZATION_SERVER_PORT+'/'+process.env.AUTHORIZATION_SERVER_TOKEN_VALIDATION_ADDRESS,
                data:{
                    token
                }
            })
            .then(function(res){
                if(res.status === 200){
                    return true
                }
            })
            .catch(function(err){
                
                return false;
            })
        }catch(error){
            debugger
        }

    }
}