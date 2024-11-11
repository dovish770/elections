import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import UserModel from '../../models/UserSchema';

export const register = async (req: Request, res: Response) => {
    try {
        const password: string = req.body.password;
        const username: string = req.body.username;

        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            res.status(400).json({ message: "that user-name is already been used!" });
            return
        }

        if (!username || !password) {
            res.status(400).json({ message: "fields missing" });
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            username: username,
            password: hashedPassword,
            isAdmin: req.body.isadmin || false
        });

        const addedUser = await UserModel.create(newUser);

        res.status(201).json({ data: addedUser, success: true });
        return

    } catch (error: any) {
        res.status(400).json({ message: error.message, success: false });
        return
    }
};
