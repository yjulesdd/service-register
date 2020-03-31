export default function makeListServices({serviceDb}){
    return async function listServices(){
        return  await serviceDb.findAll();
    }
}