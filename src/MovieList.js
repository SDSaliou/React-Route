import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieList = ({ movies}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          style={{
            width: "18rem",
            margin: "10px",
            textAlign: "center",
          }}
        >
          <Card.Img
            variant="top"
            src={movie.posterURL}
            alt={movie.title}
            style={{ height: "250px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title style={{color:'mediumpurple'}}><strong>{movie.title}</strong></Card.Title>
{/* <Card.Text>{movie.description}</Card.Text> */}
            <Card.Text style={{color:"mediumpurple"}}>Note: {movie.note}/10</Card.Text>
            {/* <Button variant="primary" style={{backgroundColor:'mediumpurple'}} onClick={() => onMoreDetails(movie.videoURL)}>
              Voir la Bande
            </Button> */}
            <Link to={`/movie/${movie.id}`} style={{ color: "mediumpurple", textDecoration: "none" }}>
              Voir les détails
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
