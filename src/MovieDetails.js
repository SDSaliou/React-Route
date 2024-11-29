import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>Film non trouvé</p>;
  }
  return (
    <div style={{ 
        textAlign: 'center', 
        color: 'black', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        maxWidth: '800px', 
        margin: '20px auto' 
      }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Description {movie.title}</h2>        
        <p style={{ 
          maxWidth: '600px', 
          margin: '20px auto', 
          lineHeight: '1.6', 
          fontSize: '16px', 
          color: 'Black' 
        }}>
          {movie.description}
        </p>        
        <iframe
          width="560"
          height="315"
          src={movie.videoURL}
          title={movie.title}
          frameBorder="0"
          style={{ borderRadius: '8px', marginBottom: '20px' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        <Link 
          to="/" 
          style={{ 
            color: 'mediumpurple', 
            textDecoration: 'none', 
            fontSize: '18px', 
            fontWeight: 'bold' 
          }}
        >
          Retour à la liste
        </Link>
      </div>
      
  );
};

export default MovieDetails;