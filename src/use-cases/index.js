import makeAddService from './addService';
import makeListService from './listService';
import makeListServices from './listServices';
import makeRemoveService from './removeService';
import makeUpdateService from './updateService';

import serviceDb from '../data-access';


const addService = makeAddService({serviceDb});
const listService = makeListService({serviceDb});
const listServices = makeListServices({serviceDb});
const removeService = makeRemoveService({serviceDb});
const updateService = makeUpdateService({serviceDb});

const registerService = Object.freeze({
    addService,
    listService,
    listServices,
    updateService,
    removeService
});


export default registerService;
export {addService, listService, listServices, updateService, removeService}

