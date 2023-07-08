import {Product} from "../../models/product.js";

const deleteProduct=async (req, res) => {
    try {
        const {id} = req.body
      const product = await Product.findByIdAndDelete(id);
      
      if(product){
        res.json(product);
    }
    else{
        res.status(400).json({
            message:"No Product found to delete!"
        })
    }
      
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default deleteProduct