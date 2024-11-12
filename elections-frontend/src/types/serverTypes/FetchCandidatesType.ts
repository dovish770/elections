import CandidateModel from "../../models/Candidate";

export interface FetchCandidatesResponse {
    candidate: typeof CandidateModel[];
    message: string
}

