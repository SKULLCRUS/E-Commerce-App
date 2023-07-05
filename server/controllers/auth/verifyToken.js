
import User from '../../models/user.js'
import jwt from 'jsonwebtoken'

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

const Verify = async (req, res) => {
    const { token } = req.body

    try {

        const user = verifyToken(token)
        // console.log(user)
        // console.log(new Date(1681051672).toLocaleTimeString())

        if (user) {
            User.findOne({ _id: user.userId }).then((response) => {
                if (response === null) {
                    return res.status(404).json({ success: false, message: "User not found" })
                } else {
                    return res.status(200).json({ success: true, ...user })
                }
            }).catch((err) => {
                console.log(err)
                return res.status(404).json({ success: false, message: "Something went wrong!!!" })
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: "Invalid token"
            })
        }
    }
    catch(err) {
        console.log(err)
        res.status(404).json({
            success: false,
            message: "Invalid token"
        })
    }
}

export default Verify
