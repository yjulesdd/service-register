import makeService from '../entity'

export default function makeAddService({serviceDb}){
    
    return  function addService(serviceToAdd){

        const service = makeService(serviceToAdd);
        return serviceDb.insert({
            id: service.getId(),
            serviceName: service.getServiceName(),
            serviceAddress: service.getServiceAddress(),
            servicePort: service.getServicePort(),
            isOnline: service.getServiceIsOnline()
        });
    }
}
