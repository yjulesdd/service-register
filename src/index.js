const envConfig = require('dotenv').config();
const express = require('express');
const app = express();
const makeCallback = require('./express-callback');


import{ postService, deleteService, patchService, getService, getServices } from './controllers';
import bodyParser from 'body-parser';


app.use(bodyParser.json());

//initiate router in my app

//--------------------------------------------------------------------------------------------

//get env key
if(envConfig.error){
    throw 'there is an error' + envConfig.error
}
const envKeys = envConfig.parsed;
//---------------------------------------------------------------------------------------------

app.post('/register', makeCallback(postService))
app.patch('/update-service-:id',makeCallback(patchService))
app.get('/delete-service', makeCallback(deleteService))

app.get('/get-service-info', makeCallback(getService));

app.get('/get-services-info',makeCallback(getServices))



app.listen(envKeys.HOST_PORT, () => {
    console.log(`Service register running at http://${envKeys.HOST_NAME}:${envKeys.HOST_PORT}`);
})

