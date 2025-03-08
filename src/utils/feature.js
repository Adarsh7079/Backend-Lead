import jwt from "jsonwebtoken";


// making session for user login and Authentication no use for lead API but can be use for login/signup in future 
export const sendCookie=(user , res, message , statucode=200)=>{
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET)
     
   //  Cookie stotrage for Authentication
    res
    .cookie("token",token,{
       httpOnly:true,
       maxAge:15*60*1000,
       sameSite: 'None',  // or 'Lax' depending on your requirements
       secure: process.env.NODE_ENV === 'development' ? false : true,

    }).json({
       success:true,
       message,
       user:user._id
    });
   
}; 