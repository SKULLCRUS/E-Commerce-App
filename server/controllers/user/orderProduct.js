import User from "../../models/user.js"
import {Product} from "../../models/product.js"
import Order from"../../models/order.js"

const orderProduct=async (req, res) => {
    try {
      const { cart, totalPrice, address } = req.body;
      let products = [];
  
      for (let i = 0; i < cart.length; i++) {
        let product = await Product.findById(cart[i].product._id);
        if (product.quantity >= cart[i].quantity) {
          product.quantity -= cart[i].quantity;
          products.push({ product, quantity: cart[i].quantity });
          await product.save();
        } else {
          return res
            .status(400)
            .json({ message: `${product.name} is out of stock!` });
        }
      }
  
      let user = await User.findById(req.user);
      user.cart = [];
      user = await user.save();
  
      let order = new Order({
        products,
        totalPrice,
        address,
        userId: req.user,
        orderedAt: new Date().getTime(),
      });
      order = await order.save();
      res.json(order);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default orderProduct