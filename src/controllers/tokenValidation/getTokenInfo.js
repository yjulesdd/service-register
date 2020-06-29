const jwt = require('jsonwebtoken');
const fs = require('fs')

export default function makeGetTokenInfo({} = {}){
    return async function getTokenInfo({token}){
        
        const pubKey = fs.readFileSync(__dirname+'/../../token/jwtRS256.key.pub');

        return jwt.verify(token, pubKey, function(err, decoded){   

            return err ? false : decoded;
        })
    }
}