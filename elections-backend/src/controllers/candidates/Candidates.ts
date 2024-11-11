import { Request, Response } from 'express';
import CandidateModel from '../../models/Candidate';

export const getCandidates = async (req: Request, res: Response) => {
    try {
        const allCandidates = await CandidateModel.find(); 
        res.status(200).json({ success: true, data: allCandidates });
    } catch (error) {
        res.status(400).json({ success: false, message: "Can't get users" });
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const {image, name, votes} = req.body

        if (!image || !name || !votes) {
            res.status(400).json({ message: "fields missing" });
            return
        }
        const newUser = new CandidateModel({
            image: image,
            name: name,
            votes: votes
        });

        const addedUser = await CandidateModel.create(newUser);

        res.status(201).json({ data: addedUser, success: true });
        return

    } catch (error: any) {
        res.status(400).json({ message: error.message, success: false });
        return
    }
};