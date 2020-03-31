import makePatchService from '../../src/controllers/patchService';
import makeFakeService from '../fixtures/service';
import updateService from '../../src/use-cases';


describe('update service', () => {

    it('successfull to update a service', async () => {
        const service = makeFakeService();
        const patchService = makePatchService({updateService: sidibe => sidibe});

        const request= {
            headers:{
                'Content-Type': 'application/json'
            },
            params:{
                serviceId: service.id
            },
            body: service

        }

        const expected = {
            headers:{
                'Content-Type': 'application/json'
            },
            statusCode:200,
            body:{
                updated:{
                    toUpdate: request.body
                }
            }
        }

        const actual = await patchService(request);
    
        expect(actual).toEqual(expected)
        
    })
})

