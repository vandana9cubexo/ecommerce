const mongoose =require("mongoose")
const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"please enter product price"],
        maxLength:[8,"Price cannot exceed 8 character"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:{
        public_id:{
            type:String,
            required:true,
        },url:{
            type:String,
            required:true,
        }
    },
    category:{
        type:String,
        required:[true,"Please enter other category"]
    },
    Stock:{
        type:String,
        required:[true,"Please enter product stock"],
        maxLength:[4,"Stack cannot exceed 4 character"],
        default:1
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createAt:{
        type:Date,
        default:Date.now
    },
})
module.exports=mongoose.model("Product",ProductSchema)