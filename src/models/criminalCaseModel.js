import mongoose from  "mongoose";
const Long = require('mongoose-long')(mongoose);

const caseSchema =new mongoose.Schema({
    CaseType:{
        type:String,
    },
    Description:{
        type:String,
    },
    PeopleAffected:{
        type:Number,
    },
    Compensation:{
        type:Number,
    },
    TimePeriod:{
        type:Number,
    },
    Death:{
        type:Number,
    },
    PriorityScore:{
        type:Number,
    }
})


const CriminalCase=mongoose.models.Criminalcase || mongoose.model("Criminalcase",caseSchema);

export default CriminalCase;
