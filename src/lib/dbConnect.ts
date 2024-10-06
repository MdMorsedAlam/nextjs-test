import mongoose from 'mongoose';

const connections:{isConnected?:number}={};
 const dbConnect=async()=>{

    if(connections.isConnected){
        console.log("Using existing connection");
        return;
    }

   try {
    const db = await mongoose.connect(process.env.MONDODB_URI!);
    connections.isConnected= db.connections[0].readyState;
    // console.log(db)
    // console.log("MongoDB connected");
   } catch (error:any) {
    console.log("Db Connection Error",error);

    process.exit(1);
   }

}


export default dbConnect;