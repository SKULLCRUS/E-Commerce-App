
import User from "../../models/user.js"
import bcrypt from "bcrypt"
import dotenv from 'dotenv'
dotenv.config()
// const authRouter = express.Router();
// const jwt = require("jsonwebtoken");
// const auth = require("../middlewares/auth");

const signup = async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Get values from request
  if (!email || !password||!name) return res.status(400).json({ 
    success: false,
    message: 'All fields are required' });
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ 
            success:false,
            message: "User with same email already exists!" });
      }
  // Salt and hash password
  const saltedPassword = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, saltedPassword)
    //   const hashedPassword = await bcryptjs.hash(password, 8);
  
     // Create new user
    const newUser = await User.create({
        email,
        password: hashedPassword,
        name
      })
  
  
      res.status(200).json({
        success: true,
        user:newUser,
        message: 'User created successfully!',
      })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  }

  export default signup