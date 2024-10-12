import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidatesFromStorage = localStorage.getItem("savedCandidates");
    if (savedCandidatesFromStorage) {
      setSavedCandidates(JSON.parse(savedCandidatesFromStorage));
    }
  }, []);

  return (
    <div className="saved-candidates-container">
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate, index) => (
          <div key={index} className="candidate-card">
            <img
              className="avatar"
              src={candidate.avatar_url}
              alt={`${candidate.name}'s avatar`}
            />
            <div className="candidate-info">
              <h2>
                {candidate.name} ({candidate.login})
              </h2>
              <p>Location: {candidate.location}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
              </p>
              <p>Company: {candidate.company}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No candidates have been saved.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
