import makeAddService from '../../src/use-cases/addService';
import makeServiceDb from '../../src/data-access/register-db';
import makeFakeService from '../fixtures/service';
import makeDb from '../fixtures/db'

describe('Use-case Add service', () => {

    let serviceDb ;

    beforeAll(() => {
        serviceDb = makeServiceDb({makeDb});
    })


    it('insert service in DataBase', async() => {
        const newService = makeFakeService();
        const addService = makeAddService({serviceDb});

        const inserted = await addService(newService);
        expect(inserted).toMatchObject(newService);
    })


})