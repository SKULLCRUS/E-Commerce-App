import Order from"../../models/order.js"

const changeOrderStatus=async (req, res) => {
    try {
      const { id, status } = req.body;
      let order = await Order.findById(id);
      if(order){
        order.status = status;
      order = await order.save();
      res.json(order);
      }else{
        res.status(400).json({message:"No orders found!"})

      }
      
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  export default changeOrderStatus