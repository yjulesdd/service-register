import makeFakeService from '../fixtures/service';
import makeDb from '../fixtures/db';
import makeServiceDb from '../../src/data-access/register-db';

describe('update service', () => {
    

    it('successfully update a service', async () => {
        const service = makeFakeService();
        const serviceDb = makeServiceDb({makeDb});

        await serviceDb.insert(service);

        service.serviceName = 'service name updated from use case test';

        const updated = await serviceDb.update(service);

        expect(service).toEqual(updated);
    })
})