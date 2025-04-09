 
 import mongoose from "mongoose";
 const connectDB =async()=>{
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected');
    })

    mongoose.connect(
        `${process.env.MONGODB_URL}/imagify?retryWrites=true&w=majority`,
        
            );
      };
      
      export default connectDB;