import makeServiceDb from '../../src/data-access/register-db';
import makeDb from '../fixtures/db';
import makeListService from '../../src/use-cases/listService';
import makeFakeService from '../fixtures/service';


describe('list one service', () => {
    
    let serviceDb;

    beforeAll(() => {
        serviceDb = makeServiceDb({makeDb});
    });

    it('get one service info', async () => {
        const newService = makeFakeService();
        const inserted = await serviceDb.insert(newService);

        const listService = makeListService({serviceDb});
        const found = await listService(inserted);

        expect(found).toEqual(newService);
    });

    it('get service with null id', () => {
    
        const listService = makeListService({serviceDb});

        expect(listService({})).rejects.toThrow('please supply a service');
    });
})