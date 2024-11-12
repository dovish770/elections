import CandidateModel from "../../models/Candidate";

interface CandidateState {
    candidates: typeof CandidateModel[]
    status: string;
    error: string | null;
}

export default CandidateState