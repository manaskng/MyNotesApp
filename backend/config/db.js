import mongoose from "mongoose"
export const connect=async(req,res)=>{
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongodb connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}
