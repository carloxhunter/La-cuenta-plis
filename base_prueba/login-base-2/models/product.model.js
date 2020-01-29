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

ProductSchema.virtual('nameid').get(function(){
    var prodreturn = {id:this._id, productName:this.productName};
    return prodreturn;})

ProductSchema.set('toJSON', { virtuals: true });
ProductSchema.set('toObject', { virtuals: true });
module.exports=mongoose.model('Product', ProductSchema);