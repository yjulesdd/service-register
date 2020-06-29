const { serviceControllers } = require('../../controllers');

const addService = {
    name: "addService",
    method: "post",
    link:"/service",
    controller: serviceControllers.postService,
    params:{},
    accessRightLevel: ['superAdmin'],
    accessRightGroups: []
}

const getService = {
    name: "getService",
    method: "get",
    link:"/service",
    controller: serviceControllers.getService,
    params:{},
    accessRightLevel: [],
    accessRightGroups: []
}

const getServices = {
    name: "getServices",
    method: "get",
    link:"/services",
    controller: serviceControllers.getServices,
    params:{},
    accessRightLevel: [],
    accessRightGroups: []
}

const deleteService = {
    name: "deleteService",
    method: "delete",
    link:"/service",
    controller: serviceControllers.deleteService,
    params:{},
    accessRightLevel: [],
    accessRightGroups: []
}

const updateService = {
    name: "updateService",
    method: "patch",
    link:"/services",
    controller: serviceControllers.patchService,
    params:{},
    accessRightLevel: [],
    accessRightGroups: []
}

const runService = {
    name: "runService",
    method: "post",
    link: "/run",
    controller: [
        serviceControllers.runService
    ],
    params:{},
    accessRightLevel:[],
    accessRightGroups:[]
}


const serviceRouter = {
    prefix: "/api/service",
    routerName: "serviceRouter",
    routes:[
        addService,
        runService,
        getService,
        getServices,
        deleteService,
        updateService
    ]
}

module.exports = serviceRouter;