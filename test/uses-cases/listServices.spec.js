import makeServiceDb from '../../src/data-access/register-db';
import makeDb from '../fixtures/db';
import makeFakeService from '../fixtures/service';
import makeListServices from '../../src/use-cases/listServices';





describe('List all services', () => {

    let serviceDb;

    beforeAll( async () => {
        serviceDb = makeServiceDb({makeDb});
        //clean the database
        // await clearDb();
    })

    it('list all service', async () => {
        const services = await Promise.all(
            [makeFakeService(),makeFakeService(),makeFakeService()].map(serviceDb.insert));

        const listService = makeListServices({serviceDb});
        const found = await listService(services);

        services.forEach(service => expect(found).toContainEqual(service));


    })
})
