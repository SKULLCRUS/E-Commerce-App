import User from '../../models/user.js'

const getUser=async (req, res) => {
    const user = await User.findById(req.user);
    res.json({ ...user._doc, token: req.token });
  }
  export default getUser