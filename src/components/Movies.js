import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const { currentUser } = useAuth();

  useEffect(() => {
    getMovies();
    console.log("init");
  }, []);

  const getMovies = async () => {
    setLoading(true);
    console.log("getting moviues");
    const result = await axios.get("http://localhost:8000/api/movies?limit=20");
    setMovies(result.data);
    setLoading(false);
  };

  const markAsSeen = async (movieId, userId) => {
    console.log("function");
    console.log("trying");
    await axios.post("http://localhost:8000/api/movies/mark-seen", {
      movieId: movieId,
      userId: userId,
    });
    getMovies();
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
          <div className="w-100 text-center mt-2 row margin-auto">
            {loading && (
              <div className="col-lg-12">
                <h3>Loading...</h3>
              </div>
            )}
            {movies.map((movie, index) => {
              return (
                <div key={movie.id} className="col-md-6 col-lg-4">
                  <Card.Body>
                    <p>{movie.title}</p>
                    <Button
                      disabled={movie.seen}
                      onClick={() => markAsSeen(movie.id, 1)}
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
