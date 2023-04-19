const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        age:{type:String,required:true},
    },
    {
        timestamps:true
    }
)

const ImageSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        image:{data:Buffer,contentType:String}
    }
)

const product = mongoose.model("Product",productSchema)
// const imageModel = mongoose.model("ImageModel",ImageSchema)

module.exports = {
    product,
    // imageModel,
}