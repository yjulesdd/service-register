import makeFakeService from '../fixtures/service';
import makePostService from  '../../src/controllers/postService';
import {addService} from '../../src/use-cases';


describe('post comment controller', () => {

    it('successfully post a service', async () => {
        const postService = makePostService({addService});
        const service = makeFakeService();
        
        
        const request = {
            headers:{
                'content-Type': 'application/json',
            },
            body: service
        }

        const expected = {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 201,
            body: { posted: request.body }
        }

        const actual = await postService(request);
        expect(actual).toEqual(expected);
    });

    it('try to put bad service', async() => {
        const service = makeFakeService();
        service.serviceName = '';

        const postService = makePostService({addService})

        console.log(service);

        const request = {
            headers:{
                'content-Type': 'application/json',
            },
            body: service
        }

        const expected = {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 400,
            body: { error: 'The service name must have more than 3 charaters and is a string'}
        }

        const actual = await postService(request);
        expect(actual).toEqual(expected);

    })





})