import {Product} from "../../models/product.js";

const getProductByCategory = async (req, res) => {
    try {
      const products = await Product.find({ category: req.query.category });
      if(products){
        res.json(products);
      }else{
        res.status(400).json({message: "No products found for this category"});

      }
      
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default getProductByCategory