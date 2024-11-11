import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    username: string;
    password: string;
    isAdmin: boolean;
    hasVoted: boolean;
    votedFor: mongoose.Types.ObjectId | null;
  }

const userSchema: Schema<IUser> = new Schema(
    {
        username:{
        type:String,
        unique:true,
        required:true
        },
        password:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            default: false,
        },
        hasVoted:{
            type:Boolean,
            default: false,
        },
        votedFor:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Candidate', 
            default: null,
        },
    },
    { timestamps: true } 
)

const User = mongoose.model<IUser>('User', userSchema);

export default User;