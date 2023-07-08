import {Product} from "../../models/product.js";

const getProductsByName = async (req, res) => {
    try {
        let search=req.query.q;
        console.log(search);
      const products = await Product.find({ name: { $regex: `${search}`, $options: "i" }});
      console.log(products);
      if(products){
        res.json(products);
      }else{
        res.status(400).json({message: "No products found for this search"});
      }
      
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default getProductsByName