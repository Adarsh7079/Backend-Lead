import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async ()=>{
    
    try{
        // Connecting MONGO Db data base using Atlas Sever and DB_NAME in Constant file we can chage it accroding to our wish ** src/constants.js  **
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      
       console.log(`\n MongoDb Connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch(error){
        console.log("MONGODB Connection error ", error);
        process.exit(1)
    }
}

export default connectDB