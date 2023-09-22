import {connect} from '@/dbConfig/dbConfig';
import { NextRequest,NextResponse } from 'next/server';
import CriminalCase from '@/models/criminalCaseModel';

export default async function DELETE({params}:any){
    try{
        await connect();
        const _id=params._id;
        console.log(_id);
        // await CriminalCase.deleteOne({_id:_id});
        return NextResponse.json({
            message:"Case deleted successfully",
            success:true,
        })
    }
    catch(error:any){
        console.log("error");
        console.log(error.message);
        return NextResponse.json({message:error.message},
            {status:500})
    }
}