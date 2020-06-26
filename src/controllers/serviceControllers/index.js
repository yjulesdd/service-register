import makeDeleteService from './deleteServices';
import makeGetService from './getService';
import makeGetServices from './getServices';
import makePatchService from './patchService';
import makePostService from './postService';

import {
    addService,
    listService,
    listServices,
    removeService,
    updateService
} from '../../use-cases';

const deleteService = makeDeleteService({removeService});
const getService = makeGetService({listService});
const getServices = makeGetServices({listServices});
const patchService = makePatchService({updateService});
const postService = makePostService({addService});


const serviceController = Object.freeze({
    deleteService,
    getService,
    getServices,
    postService,
    patchService
});

export default serviceController;
export { deleteService, getServices, getService, postService, patchService }
