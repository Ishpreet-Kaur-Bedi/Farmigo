const Product = require("../models/productModel")
const ErrorHandler = require("../utils/errorhandler")
 const catchAsyncErrors = require("../middleware/catchAsyncError")

//create a product -->this is an admin route

exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const {name,description,price,catagory,stock,reviews,rating,images,numOfReviews}=
    req.body 
    const product=new Product({
        name:name,
        description:description,
        price:price,
        rating:rating,
        images:images,
        catagory:catagory,
        stock:stock,
        numOfReviews:numOfReviews,
        reviews:reviews,
    })
    product.save()

    res.status(201).json({success:true,product
    });  

}
);

//Get all Products
exports.getAllProducts =  catchAsyncErrors(async(req,res)=>{
    const products = await Product.find();

    res.status(200).json({success:true,products})
}
)
//get single product details

exports.getProductDetails =  catchAsyncErrors( async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

if(!product){
    return next (new ErrorHandler("Product not found",404))
}

res.status(200).json({
    success:true,
  product
})

});

//Update Product--Admin Route


exports.updateProduct = catchAsyncErrors( async(req,res,next)=>{
    let product =  await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

product = await Product.findByIdAndUpdate(req.params.id, req.body,{
    new:true,
    runValidators:true,
    useFindAndModify:false
})

res.status(200).json({
    success:true,
    product
})
}
)
//Delete Product

exports.deleteProduct =catchAsyncErrors( async (req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
        message:"product not found"
        })
    }

     await product.remove();

     res.status(200).json({
        success:true,
        message:"product deleted successfully"
     })
} )