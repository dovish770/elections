import express from 'express';
import { getCandidates, register } from '../controllers/candidates/Candidates'

const router = express.Router();

router.get('/candidates' ,getCandidates)
router.post('/candidates', register)

export default router