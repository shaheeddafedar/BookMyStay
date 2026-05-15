import jwt from "jsonwebtoken"

const isAuth = async (req,res,next) => {
     try {
        let {token} = req.cookies
        if (!token) {
            res.status(400).json({message:"User doesnt have a token"})
        }
        let verifyToken = jwt.verify(token,process.env.JWT_SECRET)
     } catch (error) {
        
     }
}