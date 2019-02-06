import React, { Component } from 'react';

class MovieDetails extends Component {

  render() {
    let movieToDisplay = this.props.movieToDisplay
    return (
      <div className="MovieDetails" style={{width:"100vw", height:"1000px", background:"#666"}}>
        <h2>{movieToDisplay.title}</h2>
        <img src={movieToDisplay.imageUrl} style={{width:"100%"}}/>
      </div>
    );
  }
}

export default MovieDetails;