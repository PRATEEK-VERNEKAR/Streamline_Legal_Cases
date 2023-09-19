import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();


export async function POST(request:NextRequest){
    try{
        const reqBody=await request.json();
        const {name,post,email,password}=reqBody;
        console.log(reqBody);
        //check is user already exists

        const user=await User.findOne({email});

        if(user){
            console.log("DUPLICATE")
            return NextResponse.json({error:"User already exists"},{status:400});
        }

        //hash password

        const salt=await bcryptjs.genSalt(10)
        const hashedPassword =await bcryptjs.hash(password,salt)

        const newUser=new User({
            name,
            email,
            password:hashedPassword,
            post
        })


        const savedUser=await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message:"Created User successfully",
            success:true,
            savedUser
        })
    }
    catch(error:any){
        console.log("error");
        console.log(error.message);
        return NextResponse.json({message:error.message},
            {status:500})

        // return NextResponse.error(error)
    }
}


//Avoid 'any' for error