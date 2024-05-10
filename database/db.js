import mongoose from "mongoose";

const Connection = async (URL) =>{
   
     

    try{
    //   await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true})
       await mongoose.connect(URL);  
      console.log("Database Connect Successfully");
    }catch(error){
        console.log("Error while connecting with the database", error);
    }
}
export default Connection;

