import React from "react";
import { Card, Button } from "react-bootstrap";

export default function MyWatchList({ loading, movies, markAsSeen }) {
  console.log("test");
  return (
    <div className="row">
      <div className="col-lg-12 pt-3">
        <h3 className="text-center pb-5">My Watchlist</h3>
      </div>
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="w-100 text-center mt-2 row justify-content-center">
          {loading && (
            <div className="col-lg-12 d-flex justify-content-center">
              <h3>Loading Movies...</h3>
            </div>
          )}
          {movies.length === 0 && !loading && (
            <div className="col-lg-12">
              <h3>You've not added any movies yet!</h3>
            </div>
          )}
          {movies.map((movie, index) => {
            return (
              <div key={movie.id} className="col-sm-6 col-lg-4 mb-5">
                <Card.Body className="h-100">
                  <p>{movie.title}</p>
                  <Button
                    disabled={movie.seen}
                    onClick={() => markAsSeen(movie.title, "movie_list")}
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
  );
}
