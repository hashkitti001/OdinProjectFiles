const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {type:String, required:true, minLength:6}, 
    description:{type:String, required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true}, 
    numberInStock:{type:String, required:true},

});
itemSchema.virtual("url").get(function (){
    return `/categories/${this._id}`;
});
module.exports = mongoose.model("items", itemSchema);