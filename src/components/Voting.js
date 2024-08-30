import React from "react";
import { Button, Card } from "react-bootstrap";
import { useVoting } from "../context/VotingContext";

const Voting = () => {
  const { votes, handleVote } = useVoting();

  return (
    <div className="d-flex flex-column align-items-center">
      {Object.keys(votes).map((option) => (
        <Card key={option} className="mb-3" style={{ width: "18rem" }}>
          <Card.Body className="text-center">
            <Card.Title>{option}</Card.Title>
            <Button variant="primary" onClick={() => handleVote(option)}>
              Vote
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Voting;
