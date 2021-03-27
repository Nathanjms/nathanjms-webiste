import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    setLoading(true);
    const result = await axios.get("http://localhost:8000/api/movies?limit=24");
    setMovies(result.data);
    setLoading(false);
  };

  const markAsSeen = async (movieId) => {
    try {
      await axios.post("http://localhost:8000/api/movies/mark-seen", {
        movieId: movieId,
        userId: currentUser.uid,
      });
      getMovies();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container" id="movies">
      <div className="row">
        <div className="col-lg-12 mt-4">
          <Link to="/" className="homeBtn" style={{ float: "left" }}>
            <FaHome />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-center pb-5">Movies</h1>
        </div>
        <div className="col-lg-12 d-flex justify-content-center">
          <div className="w-100 text-center mt-2 row justify-content-center">
            {loading && (
              <div className="col-lg-12 d-flex justify-content-center">
                <h3>Loading Movies...</h3>
              </div>
            )}
            {movies.map((movie, index) => {
              return (
                <div key={movie.id} className="col-sm-6 col-lg-4 mb-5">
                  <Card.Body className="h-100">
                    <p>{movie.title}</p>
                    <Button
                      disabled={movie.seen}
                      onClick={() => markAsSeen(movie.id)}
                    >
                      Seen It!
                    </Button>
                  </Card.Body>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
