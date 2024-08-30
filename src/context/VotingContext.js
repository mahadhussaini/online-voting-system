import React, { createContext, useContext, useState } from "react";

// @ts-ignore
const VotingContext = createContext();

export const VotingProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    PTI: 0,
    PMLN: 0,
    PPP: 0,
    MQM: 0,
    JUI: 0,
  });

  const handleVote = (option) => {
    if (!votes.hasOwnProperty(option)) {
      console.error("Invalid option");
      return;
    }

    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  return (
    <VotingContext.Provider value={{ votes, handleVote }}>
      {children}
    </VotingContext.Provider>
  );
};

export const useVoting = () => useContext(VotingContext);
export default VotingContext;
