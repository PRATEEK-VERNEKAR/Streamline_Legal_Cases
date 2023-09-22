import {connect} from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import AssignCriminalCourt from "@/models/assignCriminalCourtModel";

export async function POST(request:NextRequest) {
    try{
        await connect();
        const reqBody=await request.json();
        const {Judges,Assistants,Location,Lawyers}=reqBody;

        const newCourt= await AssignCriminalCourt(reqBody);

        await newCourt.save();


        return NextResponse.json({ message:"User Create Successfully" }, { status: 201 });
    }
    catch(error:any){
        console.log("error");
        console.log(error.message);
        return NextResponse.json({message:error.message},
            {status:500})
    }
}