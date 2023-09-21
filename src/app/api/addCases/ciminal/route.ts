import {connect} from "@/dbConfig/dbConfig";
import CriminalCase from "@/models/assignCriminalCourtModel";
import { NextRequest,NextResponse } from "next/server";


export async function POST(request:NextRequest){
    try{
        await connect();
        const reqBody=await request.json();
        console.log(reqBody);

        const newCase=new CriminalCase({
            reqBody
        })

        const savedCase=await newCase.save();
        console.log(savedCase);

        return NextResponse.json({
            message:"New Case added successfully",
            success:true,
            savedCase
        })
    }
    catch(error:any){
        console.log("error");
        console.log(error.message);
        return NextResponse.json({message:error.message},
            {status:500})

    }
}
