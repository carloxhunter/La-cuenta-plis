const config = require('config.json');
const db = require('_helpers/db');
const Local = db.Local;
const User = db.User;
const Product= db.Product;


/*falta deplegar el formulario para los post en front
GET display create form,
GET display delete form,
GET display update form
*/
module.exports = {
    lgetAll,
    lgetById,
    lcreate,
    lupdate,
    ldelete:_ldelete,

}


async function lgetAll(){
    return await Local.find();
}

async function lgetById(id){
    console.log('yirititito');
    return await Local.findById(id);
}

async function lcreate(localP){
    if ( await Local.findOne({ localName: localP.localName }) ||  await Local.findOne({localRut:localP.localRut})) {
        throw ' local nombre o id usados ';
    } 
        //local nuevo
        localData =  { localName:localP.localName, localDes:localP.localDes, localLoc:localP.localLoc, localRut:localP.localRut };
        const local = new Local(localData);
        //local.save(function(err){
         //   if(err){
           //     callback(err,null)
             //       return
             await local.save();
            }
            //console.log('New Local: '+local);
            //locals.push(local);
            //callback(null, local);
        



async function lupdate(){
    console.log('no nescesario por ahora');

}

    async function _ldelete(id){
        var user = await User.find({local:id}).distinct('_id');
        console.log('yirote');
        temp=JSON.stringify(user);
        
        console.log(JSON.stringify(user));


        //await Local.findIdAndRemove(id);
    }
