const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const ProductSchema = new Schema({
    productName:{type:String, unique:true, required: true},
    productDes:{type:String},
    productCost:{type:Number, required:true},
    local:{type:Schema.Types.ObjectId, ref:'Local'}
});

ProductSchema.virtual('url').get(function(){
    return '/product/'+this._id;
});

module.exports=mongoose.model('Product', ProductSchema);