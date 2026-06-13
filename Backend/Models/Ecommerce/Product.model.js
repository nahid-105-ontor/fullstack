const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
        default:0
    },
    stack:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
  },
  { timestamps: true },
);
const Product = mongoose.model("Product", productSchema);
module.exports =Product;
