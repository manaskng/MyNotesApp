import express from "express"
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { protect } from "../middlewares/auth.js";
import jwt from "jsonwebtoken";

const router=express.Router();

//user Register Route
router.post("/register",async (req,res)=>{
    try {
        const {username,email,password}=req.body;
    if(!username||!email||!password) {
        return res.status(401).json({message:"fill all fields"})
    }
    const Userexists =await User.findOne({email});
    
    if(Userexists){
        return res.status(400).json({message:"user already exists"});
    }
    
    const user=await User.create({username,email,password});
    const token=generateToken(user.id)
    res.status(201).json({
        id:user._id,
        username:user.username,
        email:user.email,
        token,

    })
    } catch (error) {
        return res.status(501).json({message:"server error"});
    }

})

//login route

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await User.findOne({email});
        if(!user||!(await user.matchPassword(password))){
            return res.status(400).json({message:"Invalid Credentails"});

        }
         const token=generateToken(user.id)
        res.json({
            id:user._id,
            username:user.username,
            email:user.email,
            token,

        })

        
    } catch (error) {
        return res.status(501).json({message:"server error"});
    }  

});
//route to return user but uses authorisatoin 
router.get("/me", protect,async(req,res)=>{
    console.log("user authenticated",req.user)
    return res.status(201).json(req.user)

})
//generating a jsonwebtoken using sign of jwt and jwtsecret key
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"30d"});
}
export default router;