//const config = require('config.json');
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
    
    var local = await Local.findById(id);
    
    var user = await User.find({local:id});
    
    var prod = await Product.find({local:id});
    var result = {Local:local.datoslocal, Trabajadores:[String], Productos:[String]};
    //var objetos_delete = {local1, Des:"Junto con el local, se eliminaran", Deletedusers:[String], Deletedproducts:[String]};
        for (var i=0, len=user.length; i<len; i++){
            var yiro2=user[i].usernameid.username;
            result.Trabajadores.push(yiro2);
            
     }
        console.log('yirititito');    
        for (var j=0, lenj=prod.length; j<lenj;j++){
            var temp=prod[j].nameid.productName;
            //console.log(JSON.stringify(prod[j].nameid.id));
            result.Productos.push(temp);
            
     }

     console.log(JSON.stringify(result));
    return result;
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
        //var user = await User.find({local:id}).distinct('_id');
        var user = await User.find({local:id});
        var prod =await Product.find({local:id});
        var local = await  Local.findById(id);
        var local1 = local.datoslocal;
        //console.log(local1);
        var objetos_delete = {local1, Des:"Junto con el local, se eliminaran", Deletedusers:[String], Deletedproducts:[String]};
        for (var i=0, len=user.length; i<len; i++){
            var yiro2=user[i].usernameid.username;
            objetos_delete.Deletedusers.push(yiro2);
            await User.deleteOne({'_id':user[i].usernameid.id}); //descomentar
     }
            
        for (var j=0, lenj=prod.length; j<lenj;j++){
            var temp=prod[j].nameid.productName;
            //console.log(JSON.stringify(prod[j].nameid.id));
            objetos_delete.Deletedproducts.push(temp);
            await Product.deleteOne({'_id':prod[j].nameid.id}); //descomentar
     }

        await Local.deleteOne({'_id':id}); //descomentar
       
        return objetos_delete;
    }


    