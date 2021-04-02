import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function RandomMoviePicker({ movies }) {
  const [chosen, setChosen] = useState(false);
  const [randomMovie, setRandomMovie] = useState("");
  var unwatched = [];

  movies.forEach((movie, index) => {
    if (!movie.seen) {
      unwatched.push(movie);
    }
  });
  movies = unwatched;

  function random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const wait = (delay, ...args) =>
    new Promise((resolve) => setTimeout(resolve, delay, ...args));

  const chooseMovie = async (movies) => {
    var i = 20;
    while (i > 0) {
      var movie = random(movies);
      setRandomMovie(movie.title);
      await wait(20 * i);
      i--;
    }
    console.log(i);
    setChosen(movie.title);
  };

  return (
    <div className="row">
      <div className="col-lg-12 pt-3">
        <h3 className="text-center pb-5">Random Movie Picker</h3>
      </div>
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="w-100 text-center mt-2 row justify-content-center">
          {movies.length === 0 && (
            <div className="col-lg-12">
              <h3>There are no movies to choose from!</h3>
            </div>
          )}
          <Card.Body className="h-100">
            <Button onClick={() => chooseMovie(movies)}>Find a Movie!</Button>
            {randomMovie.length > 0 && !chosen && (
              <div className="col-lg-12 mt-5">
                <h3>Choosing...</h3>
                <h4>{randomMovie}</h4>
              </div>
            )}
            {chosen && (
              <div className="col-lg-12 mt-5">
                <h3>I have selected:</h3>
                <h4>{randomMovie}</h4>
              </div>
            )}
          </Card.Body>
        </div>
      </div>
    </div>
  );
}
