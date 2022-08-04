const Product=require('../models/productModels')
//create Product--Admin
exports.createProduct=async(req,res)=>{
    const product=await Product.create(req.body)
    res.status(500).json({
        success:true,
        product
    })
}
exports.getAllProduct=async(req,res)=>{
    const products=await Product.find()
    res.status(200).json({
        success:true,
        products
    })
}
//Update Admin
exports.updateProduct=async(req,res,next)=>{
    let product=Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            Message:"Product not found"
        })
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        userFindModify:false
    })
    res.status(200).json({
        success:true,
        product
    })
}
//Delete Product
exports.deleteProduct=async(req,res,next)=>{
    const product=await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }
    await Product.deleteOne()
    res.status(200).json({
        success:true,
        product
    })
}
//get product details
exports.getProductDetails=async(req,res,next)=>{
    const product=await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    res.status(200).json({
        success:true,
        product
    })
}
