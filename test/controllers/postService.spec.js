import makePostService from '../../src/controllers/postService';
import {addService} from  '../../src/use-cases';
import makeFakeService from '../fixtures/service';
import {clearDb} from  '../fixtures/db';


describe('post service', () => {

    beforeEach(async () => {
            await clearDb();
    })

    it('successfully post a service', async () => {
        const newService = makeFakeService();
        newService.serviceName = 'YJY FLY';
        
        const postService = makePostService({addService});

        const request = {
            headers:{
                'Content-Type' : 'application/json',
            },
            body:{
                ...newService
            }
        }

        const posted = await postService(request);

    });


    it('try to post a service with a name already in database', async () => {
        const newService = {
            "serviceName": "Service 1",
            "serviceAddress": "172.17.0.140",
            "servicePort": 8700
        }
        
        const postService = makePostService({addService});

        const request = {
            headers:{
                'Content-Type' : 'application/json',
            },
            body:{
                ...newService
            }
        }

        const posted = await postService(request);


        const newService2 = {
            "serviceName": "Service 1",
            "serviceAddress": "172.17.0.140",
            "servicePort": 8700
        }

        const request2 = {
            headers:{
                'Content-Type' : 'application/json',
            },
            body:{
                ...newService2
            }
        }

        const posted2 = await postService(request2);

        expect(posted2.body.error).toEqual("There is an already service which this serviceName");


    });


    it('try to post a service with a Port already in database', async () => {
        const newService = {
            "serviceName": "Service 1",
            "serviceAddress": "172.17.0.140",
            "servicePort": 8700
        }
        
        const postService = makePostService({addService});

        const request = {
            headers:{
                'Content-Type' : 'application/json',
            },
            body:{
                ...newService
            }
        }

        const posted = await postService(request);


        const newService2 = {
            "serviceName": "Service 2",
            "serviceAddress": "172.17.0.140",
            "servicePort": 8700
        }

        const request2 = {
            headers:{
                'Content-Type' : 'application/json',
            },
            body:{
                ...newService2
            }
        }

        const posted2 = await postService(request2);

        expect(posted2.body.error).toEqual("There is an already service which this servicePort");


    });


})