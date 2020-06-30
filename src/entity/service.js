import Id from '../Id';
const isIp = require('is-ip');



export default  function BuildMakeService ({RulesChecker, serviceRules}){
    return function makeService(
        {
            id = Id.makeId(),
            serviceName,
            serviceAddress,
            servicePort,
            isOnline = true,
            routes = []
        }
    ){

        
        if(!Id.isValidId(id)){
            throw new Error('This Id is not correct');
        }

        if(RulesChecker) RulesChecker(serviceRules, {...arguments[0]});



        return Object.freeze({
            getId: () => id,
            getServiceName: () => serviceName,
            getServiceAddress:() => serviceAddress,
            getServicePort:() =>  servicePort,
            getServiceIsOnline:() => isOnline,
            getRoutes:()=> routes,
            setIsOnline:(state) => {
                if(typeof state === 'boolean')
                IsOnline = state;

                else
                throw new Error('the state have to be a boolean');
            }  
        })

    }
}
