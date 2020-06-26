const serviceRouter = require('express').Router();
const { serviceControllers } = require('../../controllers');
const makeCallback = require('../../express-callback');

//USER ROUTES
serviceRouter.post('/add-user', makeCallback(serviceControllers.postService));
serviceRouter.get('/get-user', makeCallback(serviceControllers.getService));
// serviceRouter.post('/get-all-users', makeCallback(serviceControllers.getAllUsers));
serviceRouter.delete('/delete-user', makeCallback(serviceControllers.deleteService));
serviceRouter.patch('/update-user', makeCallback(serviceControllers.patchService));


module.exports = serviceRouter;