import {Product} from "../../models/product.js"

const dealOfTheDay = async (req, res) => {
    try {
      let products = await Product.find({});
  //a and b here are two products
      products = products.sort((a, b) => {
        let aSum = 0;//aSum is the total sum of ratings of product a
        let bSum = 0;//bSum is the total sum of ratings of product b
  
        for (let i = 0; i < a.ratings.length; i++) {
          aSum += a.ratings[i].rating;
        }
  
        for (let i = 0; i < b.ratings.length; i++) {
          bSum += b.ratings[i].rating;
        }
        return aSum < bSum ? 1 : -1;//1 for asc and -1 for desc
      });
  
      res.json(products[0]);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  export default dealOfTheDay