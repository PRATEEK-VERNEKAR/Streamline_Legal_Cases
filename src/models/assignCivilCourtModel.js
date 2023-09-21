import mongoose from 'mongoose';

const courtSchema=mongoose.Schema({
    Judges:[
        {
            Name:{
                type:String,
                required:[true,"Name is required"]
            },
            SpecialPost:{
                type:String,
            },
            email:[true,"Email is required"]
        }
    ],
    Assistants:[
        {
            Name:{
                type:String,
                required:[true,"Name is required"],
            },
            email:[true,"Email is required"]
        }
    ],
    Location:{
        type:String,
        required:[true,"Location is required"]
    },
    Lawyers:[
        {
            Name:{
                type:String,
                required:[true,"Name is required"],
            },
            email:[true,"Email is required"],
            client:{
                type:String,
                required:[true,"Client is required"]
            }
        }
    ],
    Dates:String
})

const AssignCivilCourt=mongoose.model('Assigncivilcourt',courtSchema)||mongoose.models.Assigncivilcourt;

export default AssignCivilCourt;