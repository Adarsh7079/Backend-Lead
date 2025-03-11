import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

app.use(
    cors({
      origin: function (origin, callback) {
        callback(null, origin || "*"); // ✅ Allow all origins dynamically
      },
      credentials: true, // ✅ Allow credentials (cookies, authentication)
      allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allow necessary headers
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // ✅ Allow all HTTP methods
    })
  );
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))

//access configuration for public folder
app.use(express.static("public"))
app.use(cookieParser())  


//routes import for calling leads API
import leadRouter from "./routes/lead.routes.js"

//routes declaration 
app.use("/api",leadRouter)

export {app} 