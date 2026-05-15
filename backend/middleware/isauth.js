import jwt from "jsonwebtoken"

const isAuth = async (req,res,next) => {
     try {
        let {token} = req.cookies
        if (!token) {
            res.status(400).json({message:"User doesnt have a token"})
        }
        let verifyToken = jwt.verify(token,process.env.JWT_SECRET)
          if (!verifyToken) {
            res.status(400).json({message:"User doesnt have a verifyToken"})
        }
        req.userId = verifyToken.userId
        next()

     } catch (error) {
        res.status(500).json({message:`error in is auth${error} `})
     }
}

export default isAuth
