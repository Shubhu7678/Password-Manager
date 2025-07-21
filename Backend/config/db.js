import mongoose from "mongoose"

const connectDb = async () => {

  try{
     
     await mongoose.connect(process.env.DB_URI);
     console.log("db connected");

  }catch(error){

     console.log("db connection error :",error);
  }

}

export default connectDb