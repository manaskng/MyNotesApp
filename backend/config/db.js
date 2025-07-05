import mongoose from "mongoose"
export const connect=async(req,res)=>{
    try {
        if (!process.env.MONGODB_URI) {
  throw new Error("❌ MONGO_URI not set in .env file!");
}

        mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongodb connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}
