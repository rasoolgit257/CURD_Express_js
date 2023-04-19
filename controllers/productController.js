const Product =require("../models/productSchema")
// Get All Products

const getAllProduct = async(req,res) =>{
    try {
        allProductData = await Product.find()
        res.status(200).json({"message":allProductData})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"message":error})
    }
};


// Add Product
const addProduct = async(req,res) => {
    try {
        const product= await Product.create(req.body)
        res.status(200).json({"message":product})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"message":error.message})
    }
};

// Get Single product

const getSingleProduct = async (req,res) =>{
    try {
        const singleProductOutput= await Product.findById(req.params.productId)
        res.status(200).json({"message":singleProductOutput})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"message":error.message})
    }
};

// Delete product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.status(200).json(removeProduct);
      } catch (error) {
        res.status(500).json({ message: error });
      }
};

module.exports = {
    addProduct,
    getAllProduct,
    getSingleProduct,
    product_delete,
}