import {Product} from "../../models/product.js"


const rateProduct = async (req, res) => {
    try {
      const { id, rating } = req.body;
      let  product = await Product.findById(id);
  
      for (let i = 0; i < product.ratings.length; i++) {
        if (product.ratings[i].userId == req.user) {
          product.ratings.splice(i, 1);//splice is used to remove or add a stipulated number of product.Here we used splice to remove a product if it is already rated by that user.
          break;
        }
      }
  
      const ratingSchema = {
        userId: req.user,
        rating,
      };
  
      product.ratings.push(ratingSchema);
      product = await product.save();
      res.json(product);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default rateProduct