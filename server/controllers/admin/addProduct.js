import {Product} from "../../models/product.js";

const addProduct= async (req, res) => {
  try {
    const { name, description, images, quantity, price, category } = req.body;
    let product = await Product.create({
      name,
      description,
      images,
      quantity,
      price,
      category,
    });
    res.json(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
export default addProduct;