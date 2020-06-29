module.exports =  function makeExpressCallback(controller){
   
    return (req, res, next) => {

        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            method: req.method,
            path: req.path,
            headers:{
                'Content-Type' :req.get('Content-Type')
            }
        }



        controller(httpRequest, next)
        .then(httpResponse => {
         
            if(httpResponse.headers){
                res.set(httpResponse.headers);
            }

            res.type('json');
            res.status(httpResponse.statusCode).send(httpResponse.body);
        })
        .catch(e => res.status(500).send({ error: 'An unknow error occured.'}))
    }
}