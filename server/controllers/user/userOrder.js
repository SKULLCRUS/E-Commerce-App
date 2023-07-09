import Order from"../../models/order.js"

const userOrders=async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.user });
      if(orders){
          res.json(orders);
        }else{
            res.status(400).json({message:"No orders found for this user"})
        }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default userOrders