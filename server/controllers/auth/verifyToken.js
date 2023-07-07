
import User from '../../models/user.js'
import jwt from 'jsonwebtoken'

// const verifyToken = (token) => {
//     return jwt.verify(token, process.env.JWT_SECRET)
// }

const Verify = async (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.json({
            success:false,
        message:"token is empty"
        });
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.json({
            success:false,
        message:"token is Invalid"
        });
    
        const user = await User.findById(verified.userId);
        if (!user) return res.json({
            success:false,
        message:"No user found with this token"
        });
        res.json({
            success:true,
        message:"token validated successfully"
        });
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
}

export default Verify
