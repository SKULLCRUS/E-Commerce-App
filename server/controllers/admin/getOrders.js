import Order from"../../models/order.js"

const getAllOrders=async (req, res) => {
    try {
      const orders = await Order.find({});
      if(orders){
        res.json(orders);
      }else{
            res.status(400).json({message:"No orders found!"})
      }
      
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default getAllOrders