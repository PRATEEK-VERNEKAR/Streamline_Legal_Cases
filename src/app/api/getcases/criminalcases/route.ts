import {connect} from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import CriminalCase from '@/models/criminalCaseModel';

export async function GET(request:NextRequest) {
    try{
        await connect();
        const allCrimeCases=await CriminalCase.find({});
        console.log(allCrimeCases);
        return NextResponse.json({ criminalCases: allCrimeCases }, { status: 200 });
    }
    catch(error:any){
        console.log("error");
        console.log(error.message);
        return NextResponse.json({message:error.message},
            {status:500})
    }
}