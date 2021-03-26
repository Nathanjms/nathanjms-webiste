import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Movies() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out.");
    }
  }
  return (
    <div>
      Movies
      <div className="w-100 text-center mt-2">
        <h2>{currentUser.email}</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
}
