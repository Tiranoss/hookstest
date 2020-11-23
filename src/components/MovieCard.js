import React from 'react';
const MovieCard = (props) => {
    return ( 
    <div className="Card-Container">
        <div className="Cards-list">
        <img src={props.Movie.url} alt=" "/>
        <h1>{props.Movie.name}</h1>
        <p>{props.Movie.synopsis}</p>
        <p>{props.Movie.rating}</p>
        </div>

    </div>

     );
}
  
export default MovieCard;