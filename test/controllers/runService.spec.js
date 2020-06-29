import { runService } from '../../src/controllers/serviceControllers';

describe('Test run service', () => {
    // const run = runService()


    it('test run service ', async () => {
        const request = {} ;
        
        request.body = {
            token : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InBzZXVkbyI6IkZheWUiLCJ1c2VyR3JvdXAiOltdfSwiaWF0IjoxNTkzNDQxMTU0LCJleHAiOjE1OTM0Njk5NTR9.Ad5WZqoa1lhCHtfKft0-gqdm6D8APN9fs9mwp50Qqorg5QzGTFds_GzcKxMEedVI1FL3Ief_DgNpOC6c7fa_BvT1Oiiic7lXGC3xDkGUcKDPrZ2ee5MtG_gQB67LITENsYxrMObYLwHkjq1Wy3uLhGvovQr_VfQcKV_qZRU3WBhdTeE-zQBcUkHo8j4tmddFHZK6OmXzznOa64m5a-KlHkeZykQ7ZkB1vHvSBi0FTqus3hN_j5I7QLJkuWabcZLmpCGKsX3bzEvFrte0ykJBO3LApIaderERg-ET6izYH7DhTFL3ZXZBZBhd9o1OELGkGWRHVqGTCFXxfB5A-Iuy9enHj2V21lITsJEiBJd3MxDo9Lqnm0GbNt-WTSGcz2t0NJd3eXAkXRbCvemcN5voiwJYHW_8-1NZ8D4gEU2sntiL3CbZJUCwhF74u3_bZyEZU75HvnkSUMioW8V3mPcuf9QVZBqZ3fA5Dx6mx48ZFtfnETh9N3fN6ASruulAUFhygIkapmvfrp6lDyHkdfF53JeFElksK1owdxi9qkNhlyTFQ4m0a8VQhAGd7JfayiFJetRljT_nvRwt2w8qpVwDNAJxTSyEfkv3pVlE1dOjBclFzA0NgsSSmKmix-2Iuv4M_t0gYDtA66fu8MSlhpW9W4TG93XkEYvp7gUQgai8UOI",
            request: "auth.getUser",
            method: 'post',
            params: {
                
            }
        }


        const res = await runService(request);
    })
})