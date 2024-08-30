import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { useVoting } from "../context/VotingContext";

const Results = () => {
  const { votes } = useVoting();

  const totalVotes = votes.PTI + votes.PMLN + votes.PPP + votes.MQM + votes.JUI;

  const percent = (count) =>
    totalVotes === 0 ? 0 : ((count / totalVotes) * 100).toFixed(2);

  return (
    <Card className="mt-4">
      <Card.Body>
        <h2 className="text-center mb-4">Results</h2>
        {totalVotes === 0 ? (
          <p className="text-center">No votes have been cast yet.</p>
        ) : (
          Object.keys(votes).map((option) => {
            const percentage = percent(votes[option]);
            return (
              <div key={option}>
                <p>
                  {option}: {votes[option]} votes ({percentage}%)
                </p>
                <ProgressBar
                  // @ts-ignore
                  now={percentage}
                  label={`${percentage}%`}
                  className="mb-3"
                />
              </div>
            );
          })
        )}
      </Card.Body>
    </Card>
  );
};

export default Results;
