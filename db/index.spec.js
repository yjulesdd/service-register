import {setupDb} from '.';

describe('Db test',function(){
    it('Db it\'s done ?',function(done){
       
        let r = setupDb();

        console.log("test finished");
        done();
    })
})