import User from "../model/user.model.js"

export const singUp =async (req,res)=>{
  try{
   let {name,email,password}=req.body
   let exitUser = await User.findOne({email}) 
   if (exitUser) {
     return res.status(404).json({message:"User is already exist"})
   }
   let hashPassword = await bcrypt.hash(password,10)
   let user = await User.create({name, email , password:hashPassword})
   
  } catch(error){

  }
}