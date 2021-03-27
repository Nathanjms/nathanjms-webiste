import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const result = await axios.get("http://localhost:8000/api/movies");
    setMovies(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mt-4">
          <Link to="/" className="homeBtn" style={{ float: "left" }}>
            <FaHome />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-center">Movies</h1>
          <div className="w-100 text-center mt-2">
            <h2>{currentUser.uid}</h2>
            {movies.map((movie, index) => {
              return <p key={movie.id}>{movie.title}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
