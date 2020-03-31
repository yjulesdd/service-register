import makeAddService from '../../src/use-cases/addService';
import makeRegisterDb from '../../src/data-access/register-db';
import makeDb, { db } from '../fixtures/db';
import makeFakeService from '../fixtures/service';

describe('Services', () => {

    let serviceDb;

    beforeAll(() => {
        serviceDb = makeRegisterDb({makeDb});
    });

    it('insert service in database', async() => {
        const newService = makeFakeService();
        const result = await serviceDb.insert(newService);
        return  expect(result).toEqual(newService);
    });

    it('update service', async () => {
        const newService = makeFakeService();
        const result = await serviceDb.insert(newService);

        newService.serviceName = 'Jules Yao-Yao user config';
        const updated = await serviceDb.update(newService);

        return expect(updated.serviceName).toBe('Jules Yao-Yao user config');

    });

    it('delete service', async () => {
        const newService = makeFakeService();
        await serviceDb.insert(newService);

        const deleted = await serviceDb.remove(newService);
        
        expect(deleted).toBe(1);
    });

    it('find all services', async () => {
        const inserts = await Promise.all(
            [makeFakeService(), makeFakeService(), makeFakeService()].
            map( serviceDb.insert));

        const found = await serviceDb.findAll();

        expect.assertions(inserts.length);
        return inserts.forEach( insert => expect(found).toContainEqual(insert));
    }),

    it('find by id', async () => {
        const newService = makeFakeService();
        
        await serviceDb.insert(newService);

        const found = await serviceDb.findById(newService);

        expect(found).toEqual(newService);
    })



})