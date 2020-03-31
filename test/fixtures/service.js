import faker from 'faker';
import cuid from 'cuid';

const Id = Object.freeze({
    makeId: cuid,
    isValid: cuid.isCuid
});

export default function  makeFakeService(overrides){
    const service = {
        id: Id.makeId(),
        serviceName : faker.name.title(),
        serviceAddress: faker.internet.ip(),
        servicePort: 8080,
        isOnline: true
    }

    return {
        ...service,
        ...overrides
    }
}