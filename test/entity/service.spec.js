import makeService from '../../src/entity';

describe('Service', () => {
    it('service name must be a string', () => {
        const service = {
            serviceName: 12345
        }

        expect(() => makeService(service)).toThrow('The service name must have more than 3 charaters and is a string')
    });

    it('serviceAddress must an correct IP', () => {
        const service = {
            serviceName: "firstServiceTest",
            serviceAddress: "kjhfkjghfkjgh",
            servicePort:'8080'
        }

        expect(() => makeService(service)).toThrow('please put a correct adrress')
    });

    it('service port is correct ?', () => {
        const service = {
            serviceName: "firstServiceTest",
            serviceAddress: "172.17.1.1",
            servicePort: 8
        }

        expect(() => makeService(service)).toThrow('please enter correct PORT, it will be a number of 2 digits')
    })
})