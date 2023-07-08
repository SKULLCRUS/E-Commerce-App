import {Product} from "../../models/product.js";

const getAllProducts=async (req, res) => {
    try {
      const products = await Product.find({});
      // console.log(products);
      if(products){
        res.json(products);
    }
    else{
        res.status(400).json({
            message:"No Product found!"
        })
    }
      
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default getAllProducts