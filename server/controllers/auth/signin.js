
import User from "../../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const signin= async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ 
        success:false,
        message: 'Email and password are required.' });
  
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ 
            success:false,
            message: "No user found with this email!" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const { email, _id: userId } = user

        // Create JWT token
        const token = jwt.sign({ email, userId }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        })
        res.status(200).json({
          success: true,
          message: 'user signed in successfully',
          token: token,
          ...user._doc
        })
      } else {
        res.status(400).json({ success: false, message: 'Invalid credentials' })
      }
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: 'Something went wrong' })
      }
  }
  export default signin