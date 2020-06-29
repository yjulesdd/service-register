import makeDeleteService from './deleteServices';
import makeGetService from './getService';
import makeGetServices from './getServices';
import makePatchService from './patchService';
import makePostService from './postService';
import tokenValidation from '../tokenValidation'


import {
    addService,
    listService,
    listServices,
    removeService,
    updateService
} from '../../use-cases';
import makeRunService from './runService';
import makeGetAuthorization from './getAuthorization';

const deleteService = makeDeleteService({removeService});
const getService = makeGetService({listService});
const getServices = makeGetServices({listServices});
const patchService = makePatchService({updateService});
const postService = makePostService({addService});
const runService = makeRunService({listService, tokenValidation});
const getAuthorization = makeGetAuthorization({})


const serviceController = Object.freeze({
    deleteService,
    getService,
    getServices,
    postService,
    patchService,
    runService,
    getAuthorization
});

export default serviceController;
export { deleteService, getServices, getService, postService, patchService, runService, getAuthorization }
