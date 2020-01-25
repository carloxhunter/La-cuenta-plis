const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const LocalSchema=new Schema({
    localName:{type: String, unique:true, required:true},
    localDes:{type: String},
    localLoc:{type: String},
    localRut:{type:String, unique:true, required:true}  //rut del local o id unico

})


LocalSchema.virtual('url').get(function(){
    return '/local/'+this._id;
});

module.exports = mongoose.model('Local',LocalSchema);