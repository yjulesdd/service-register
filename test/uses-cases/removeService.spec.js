import makeFakeService from '../fixtures/service';
import makeServiceDb from '../../src/data-access/register-db';
import makeDb from '../fixtures/db';
import makeRemoveService from '../../src/use-cases/removeService';


describe('remove service', () => {

    let serviceDb;

    beforeAll(() => {
        serviceDb = makeServiceDb({makeDb});
    })


    it('remove service', async () => {

        const newService = makeFakeService();
        const inserted = await serviceDb.insert(newService);

        const removeService = makeRemoveService({serviceDb});

        const deleted = await removeService(newService);

        expect(deleted.deletedCount).toBe(1)
    })
})