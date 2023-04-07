const Product = require("../models/productModel")

exports.createProduct = async(req,res,next)=>{
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
    })  

}
exports.getAllProducts =(req,res)=>{
    res.status(200).json({message:"route is working fine"})
}