import User from "../../models/user.js"
import {Product} from "../../models/product.js"

const removeFromCart=async (req, res) => {
    try {
      const id = req.query.q;
    //   console.log(id);
      const product = await Product.findById(id);
      let user = await User.findById(req.user);
  
      for (let i = 0; i < user.cart.length; i++) {
        if (user.cart[i].product._id.equals(product._id)) {
          if (user.cart[i].quantity == 1) {
            user.cart.splice(i, 1);
          } else {
            user.cart[i].quantity -= 1;
          }
        }
      }
      user = await user.save();
      res.json(user);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default removeFromCart