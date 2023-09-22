import {connect} from "@/dbConfig/dbConfig";
import CriminalCase from "@/models/criminalCaseModel";
import { NextRequest,NextResponse } from "next/server";


export async function POST(request:NextRequest){
    try{
        await connect();
        const reqBody=await request.json();
        console.log(reqBody.PriorityScore.data);

        const newCase=new CriminalCase({
            "PeopleAffected":reqBody.PeopleAffected,
            "Compensation":reqBody.Compensation,
            "TimePeriod":reqBody.TimePeriod,
            "Death":reqBody.Death,
            "CaseType":reqBody.CaseType,
            "Description":reqBody.Description,
            "PriorityScore":reqBody.PriorityScore.data.ans
        })
        
        // console.log(newCase)

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
