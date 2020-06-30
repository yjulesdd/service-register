import makeService from '../entity'

export default function makeAddService({serviceDb}){
    
    return  async function addService(serviceToAdd){

        if(!serviceToAdd.serviceName || !serviceToAdd.serviceAddress || !serviceToAdd.servicePort){
            throw new Error('Un service doit avoir un serviceName, un serviceAdress et un servicePort');
        }

        let founded;

        founded = await serviceDb.findByName({serviceName : serviceToAdd.serviceName});

        if(founded){
            throw new Error('Ce nom est déja utilisé par un autre service');
        }

        if(!founded){

            // try to know if there is already a service with the same IP ADDRESS and the same port
            founded = await serviceDb.findByAddress({serviceAddress : serviceToAdd.serviceAddress}) && await serviceDb.findByPort({servicePort : serviceToAdd.servicePort})

            //if there an service with the same address and Port return an error
            if(founded){
                throw new Error('Il exist déja un service avec cette adresse IP et ce port');
            }
            
        }

        const service = makeService(serviceToAdd);
        return await serviceDb.insert({
            id: service.getId(),
            serviceName: service.getServiceName(),
            serviceAddress: service.getServiceAddress(),
            servicePort: service.getServicePort(),
            isOnline: service.getServiceIsOnline(),
            routes: service.getRoutes()
        });
    }
}
