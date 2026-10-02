import mongoose from "mongoose"

const mongodb_uri : string = process.env.MONGODB_URI!; 

const ConnectDb = async () => {
    try {
       if (!mongodb_uri) {
           throw new Error("MONGODB_URI is not defined")
       }

       await mongoose.connect(mongodb_uri)
       console.log("Db connected")

    } catch (error) {
        console.log("Error : ",error)
        
    }
}


export default ConnectDb;