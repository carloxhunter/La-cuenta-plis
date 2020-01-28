const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    local:{type:Schema.Types.ObjectId, ref:'Local'}

});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);

schema.virtual('url').get(function(){
    return '/user/userid/'+this._id;});
