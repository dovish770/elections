import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../../models/UserSchema'

export const login = async (req: Request, res: Response) => {
  
    const {username, password} = req.body;

    if(!username || !password){
        res.status(400).json({message: "Passport ID and password are required."});
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
                res.status(200).json({message: "Logged successful"});
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
    } catch (error) {
        res.status(400).json({ success: false, message: "Can't get users" });
    }
};