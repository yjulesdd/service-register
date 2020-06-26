module.exports = ({Helpers}) => {

    return  {

        serviceserviceName : {
            editable: true,
            constraints: function(serviceName){
                if(!Helpers.isString(serviceName)){
                    throw new Error('Le nom du service doit être une chaine de caractère');
                }
                if(!Helpers.lengthEqualOrUpTo(serviceName, 4)){
                    throw new Error('Le nom du servie doit comporter au moins 4 caractères');
                }
            }
        },
        serviceAdress:{
           editable: true,
           constraints: function(desc){
                  if(!Helpers.isIpv4(serviceAdress)){
                      throw new Error ('L\'adresse Ip est incorrect.');
                  }
            }
        },
        servicePort:{
            editable:true,
            constraints: function(){
                if(!Helpers.isNumber(servicePort)){
                    throw "le port doit être un entier"
                }

                if(!Helpers.lengthEqualOrUpTo(Number.isInteger(servicePort), 2)){
                    throw "Le port doit avoir 2 chiffres";
                }
            }
        },
        routes: {
            editable: true,
            constraints: function(){

            }
        }
    }
}