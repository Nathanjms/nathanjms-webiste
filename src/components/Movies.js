import React, { useState, useEffect } from "react";
import axios from "axios";
import IMDBList from "./Movies/IMDBList";
import MyWatchList from "./Movies/MyWatchList";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Alert, Tabs, Tab, Button } from "react-bootstrap";
import MovieFormModal from "./Movies/MovieFormModal";

export default function Movies() {
  const [error, setError] = useState("");
  const [movies_list, setMyMovies] = useState([]);
  const [watched_movies_list, setMyWatchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [heading, setHeading] = useState("movies-list");
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const baseURL =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3002`
      : `https://nathan-james.herokuapp.com`;

  const getUserInfo = async (uid) => {
    setLoading(true);
    try {
      const result = await axios.post(baseURL + "/api/user-info", {
        firebaseId: uid,
      });
      setUserInfo(result.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserInfo(currentUser.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userInfo) {
      getMovies(userInfo.group_id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const getMovies = async (userGroupId) => {
    setLoading(true);
    try {
      const result = await axios.get(
        baseURL + "/api/" + userGroupId + "/movies"
      );
      setMyMovies(result.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const markAsSeen = async (movieTitle, collection) => {
    try {
      await axios.post(baseURL + "/api/movies/mark-seen", {
        movieTitle: movieTitle,
        userId: currentUser.uid,
        collection: collection,
      });
    } catch (err) {
      setError(err.message);
    }
    if (collection === "movie_list") {
      getMovies("movies-list");
    } else {
      getMovies("imdb");
    }
  };

  const handleSelect = (key) => {
    setHeading(key);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

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
    <div className="container" id="movies">
      <div className="row">
        <div className="col-lg-12 mt-4">
          <Link to="/" className="homeBtn" style={{ float: "left" }}>
            <FaHome />
          </Link>
          <Button
            variant="link"
            className="homeBtn"
            style={{ float: "right" }}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
        <div className="col-lg-12">
          <h1 className="text-center pb-5">Movies</h1>
        </div>
        <div className="col-lg-12">
          <h3 className="text-center pb-5">{userInfo.user_name}</h3>
        </div>
        {error && (
          <Alert className="w-100" variant="danger">
            {error}
          </Alert>
        )}
      </div>
      <Tabs
        defaultActiveKey="movies-list"
        id="tabs"
        onSelect={(e) => handleSelect(e)}
      >
        <Tab eventKey="movies-list" title="My Watch List">
          <Button
            variant="primary"
            className="mt-3"
            onClick={() => handleShow()}
          >
            Add a new Film!
          </Button>

          <MyWatchList
            loading={loading}
            markAsSeen={markAsSeen}
            movies={movies_list}
          />
        </Tab>
        <Tab eventKey="watched-movies-list" title="My Watched Movies">
          <MyWatchList
            loading={loading}
            markAsSeen={markAsSeen}
            movies={watched_movies_list}
          />
        </Tab>
        <Tab eventKey="imdb" title="IMDB Top Movies"></Tab>
        <Tab eventKey="watched-imdb" title="IMDB Watched Movies"></Tab>
      </Tabs>
      <MovieFormModal
        handleClose={() => handleClose()}
        show={show}
        setHeading={(e) => setHeading(e)}
        baseURL={baseURL}
      />
    </div>
  );
}
