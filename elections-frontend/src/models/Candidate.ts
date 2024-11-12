import mongoose, { Document, Schema } from 'mongoose';

interface ICandidate extends Document{
    name:string,
    image:string,
    votes:number
}

const candidateSchema: Schema<ICandidate> = new Schema(
    {
        name:{
            type:String,
            unique:true,
            require:true,
        },
        image:{
            type:String,
            unique:true,
            require:true,
        },
        votes:{
            type:Number,
            default:0
        }
    }
)

const Candidate = mongoose.model<ICandidate>('Candidate', candidateSchema);

export default Candidate