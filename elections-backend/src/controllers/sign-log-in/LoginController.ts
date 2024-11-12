import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../../models/UserSchema';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in the environment variables');
  }

  
export const login = async (req: Request, res: Response) => {
  
    const {username, password} = req.body;

    if(!username || !password){
        res.status(400).json({message: "username and password are required."});
        return
    }

    try{
        const user = await UserModel.findOne({username});
        if(!user){
            res.status(404).json({message: "User not found."});
            return
        }
        else{
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(!isPasswordValid){
                res.status(400).json({message: 'Invalid password'});
                return
            }
            else{

                const token = jwt.sign({ userId: user._id, username: user.username, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' } );
                res.status(200).json({message: "Logged in successfully", token});
                return
            }
        }

    } catch (error: any) {
        res.status(500).json({ message: "Server error", error: error.message });
        return
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await UserModel.find(); 
        res.status(200).json({ success: true, data: allUsers });
    } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
    }
};