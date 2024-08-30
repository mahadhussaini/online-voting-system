import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Voting from "./components/Voting";
import Results from "./components/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VoterRegistration from "./components/VoterRegistration";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import { VotingProvider, useVoting } from "./context/VotingContext";
import "./App.css";

const App = () => {
  const { votes } = useVoting();

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Welcome to the Online Voting System</h2>
          <p className="text-center">
            Participate in the democratic process by casting your vote for your
            preferred party. Your vote matters and helps shape the future of our
            community. Voting is simple and secure!
          </p>
          <p className="text-center">
            Please select a party from the list below and click the "Vote"
            button to cast your vote. You can view the real-time voting results
            after you have voted.
          </p>
        </Col>
      </Row>

      <Voting />

      <Results
        // @ts-ignore
        votes={votes}
      />
    </Container>
  );
};

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <VotingProvider>
      <div className="body-wrapper">
        <Router>
          <Header />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/register" element={<VoterRegistration />} />
              <Route
                path="/admin"
                element={
                  isAuthenticated ? <AdminPanel /> : <Navigate to="/login" />
                }
              />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </VotingProvider>
  );
};

export default AppWrapper;
