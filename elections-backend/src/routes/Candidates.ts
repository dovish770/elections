import express from 'express';
import { getCandidates } from '../controllers/candidates/Candidates'

const router = express.Router();

router.get('/candidates' ,getCandidates)

export default router