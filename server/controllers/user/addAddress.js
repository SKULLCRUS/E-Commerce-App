import User from "../../models/user.js"
import {Product} from "../../models/product.js"

const addAddress=async (req, res) => {
    try {
      const { address } = req.body;
      let user = await User.findById(req.user);
      user.address = address;
      user = await user.save();
      res.json(user);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default addAddress