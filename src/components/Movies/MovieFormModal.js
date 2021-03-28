import React, { useRef, useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import axios from "axios";

export default function MovieFormModal({
  handleClose,
  show,
  setHeading,
  baseURL,
}) {
  const titleRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (titleRef.current.value.trim() === "") {
      setError("Invalid Title");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await axios.post(baseURL + "/api/movies/add-movie", {
        title: titleRef.current.value,
        seen: false,
      });
    } catch (err) {
      // Handle Errors here.
      var errorMessage = err.message;
      setError(errorMessage);
    }
    setLoading(false);
    handleClose();
    setHeading("");
    setHeading("movies-list");
  }

  return (
    <>
      <Modal size="lg" show={show} onHide={() => handleClose()}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add new movie to watch list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && (
              <Alert className="w-100" variant="danger">
                {error}
              </Alert>
            )}
            <Form.Group id="title">
              <Form.Label>What's the Movie Title?</Form.Label>
              <Form.Control type="text" ref={titleRef} required />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Close
            </Button>
            <Button disabled={loading} variant="primary" type="submit">
              Submit!
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
