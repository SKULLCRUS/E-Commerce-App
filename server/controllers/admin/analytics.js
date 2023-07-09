import Order from"../../models/order.js"

const analytics =async (req, res) => {
    try {
      const orders = await Order.find({});
      if(orders){
        let totalEarnings = 0;
  
        for (let i = 0; i < orders.length; i++) {
          for (let j = 0; j < orders[i].products.length; j++) {
            totalEarnings +=
              orders[i].products[j].quantity * orders[i].products[j].product.price;
          }
        }
  
        
        // CATEGORY WISE ORDER FETCHING
        let mobileEarnings = await fetchCategoryWiseProduct("Mobiles");
        let essentialEarnings = await fetchCategoryWiseProduct("Essentials");
        let applianceEarnings = await fetchCategoryWiseProduct("Appliances");
        let booksEarnings = await fetchCategoryWiseProduct("Books");
        let fashionEarnings = await fetchCategoryWiseProduct("Fashion");
    
        let earnings = {
          totalEarnings,
          mobileEarnings,
          essentialEarnings,
          applianceEarnings,
          booksEarnings,
          fashionEarnings,
        };
        res.json(earnings);
      }else{
        res.status(400).json({message:"No orders found!"})
      }
      
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async function fetchCategoryWiseProduct(category) {
    let earnings = 0;
    let categoryOrders = await Order.find({
      "products.product.category": category,//scope of error.
    });
    if(categoryOrders){
      for (let i = 0; i < categoryOrders.length; i++) {
        for (let j = 0; j < categoryOrders[i].products.length; j++) {
          earnings +=
            categoryOrders[i].products[j].quantity *
            categoryOrders[i].products[j].product.price;
        }
      }
    }else{
      earnings=0.00;
    }
  
    
    return earnings;
  }

  export default analytics