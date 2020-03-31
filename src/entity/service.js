import Id from '../Id';
const isIp = require('is-ip');



export default  function BuildMakeService (){
    return function makeService(
        {
            id = Id.makeId(),
            serviceName,
            serviceAddress,
            servicePort,
            isOnline = true,
        }
    ){

        if(typeof serviceName === 'string' && serviceName.length < 3 || 
                typeof serviceName !== 'string'){
            throw new Error('The service name must have more than 3 charaters and is a string');

        }
        if(! isIp.v4(serviceAddress)){
            
            throw new Error('please put a correct adrress')
        }
        if( !Number.isInteger(servicePort)  || Number.isInteger(servicePort) && servicePort.toString().length < 2){
            
            throw new Error('please enter correct PORT, it will be a number of 2 digits')
        }

        return Object.freeze({
            getId: () => id,
            getServiceName: () => serviceName,
            getServiceAddress:() => serviceAddress,
            getServicePort:() =>  servicePort,
            getServiceIsOnline:() => isOnline,
            setIsOnline:(state) => {
                if(typeof state === 'boolean')
                IsOnline = state;

                else
                throw new Error('the state have to be a boolean');
            }  
        })

    }
}
