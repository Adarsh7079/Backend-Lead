// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js"

// provind source of env so that load once and do all task
dotenv.config({
    path:'./env'
})

//database call for connection of  data base 
connectDB()
.then(()=>{
    // PORT i am using  from .env file we for development for production need to change 
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err);
});


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            