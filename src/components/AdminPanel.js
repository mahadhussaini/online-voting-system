import React from "react";
import { useVoting } from "../context/VotingContext";

const AdminPanel = () => {
  const { votes } = useVoting();

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Vote Results:</h3>
      <ul>
        {Object.entries(votes).map(([candidate, count]) => (
          <li key={candidate}>
            {candidate}: {count} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
