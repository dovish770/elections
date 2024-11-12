import { Request, Response } from 'express';
import CandidateModel from '../../models/Candidate';


export const getCandidates = async (req: Request, res: Response) => {
    try {
        const allCandidates = await CandidateModel.find(); 
        res.status(200).json({ success: true, data: allCandidates });
    } catch (error) {
        res.status(400).json({ success: false, message: "Can't get Candidates" });
    }
};
