import React from "react";
import { ListGroup } from "react-bootstrap";

const CandidateList = ({ candidates }) => {
  return (
    <ListGroup>
      {candidates.map((candidate, index) => (
        <ListGroup.Item key={index}>{candidate}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CandidateList;
