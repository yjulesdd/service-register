const express = require('express');

module.exports = (app) => {

    const allRoutes = require('../routes')();
   
    const makeCallback = require('../express-callback');

    const routers = [];
    let i = 0

    for(const router in allRoutes){
    
        // if there is a prefix we have to create special router for all routes in routes property
        if(!allRoutes[router] || allRoutes[router].routerName === ""){
            routers[i] = express.Router();
        }
        //add new router to routers array
        routers[i] = express.Router();

        const routes = allRoutes[router].routes;
        
        routes.forEach(route => {

            try{
                verifRoute(route);
                
                const method = route.method;            
                const link = route.link;
                const controller = route.controller;

                // if(typeof route.controller === "function "){
                    routers[i][method](link,makeCallback(controller));
                // }

                // if(Array.isArray(route.controller)){
                //     const controllers = route.controller.map(c => makeCallback(c));                    
                //     routers[i][method](link, controllers);                    
                // }
                

            }catch(e){
                console.log(e);
            }      
            
        })
    
        //try to find if there is an routes prefix
        if(allRoutes[router].prefix && allRoutes[router].prefix !== ""){
            const prefix = allRoutes[router].prefix;
            app.use(prefix, routers[i])
            
        } 

        i++;
    }

}

function verifRoute(route){

    if(!route.link){
        throw new Error((route.name ? route.name : 'A') + ' route must have a link')
    }

    if(!route.method){
        throw new Error((route.name ? route.name : 'A') + ' route must have a method')
    }

    if(!route.controller){
        throw new Error((route.name ? route.name : 'A') + ' route must have a controller')
    }

}