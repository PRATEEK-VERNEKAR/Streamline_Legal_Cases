import mongoose from  "mongoose";


export async function connect(){
    try{
        console.log("HI")
        mongoose.connect(process.env.MONGO_URI!)
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("MongoDB connected beautifully");
        })
        console.log("Hida")
        connection.on('error',(err:any)=>{
            console.log('MongoDb connection encountered error');
            process.exit();
        })
    }
    catch(err){
        console.log("Something has gone wrong");
        console.log(err);
    }
}


//Since we are using TypeScript, it is not guarantee that the URI will always resolve
//By adding ! we say that it will definitely do