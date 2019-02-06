import React, { Component } from 'react';

class MovieCard extends Component {

  render() {
    let {description, imageUrl, rating, subtitle, title, year} = this.props.movie
    return (
      <div className="MovieCard" style={{width: "200px", height:"200px", border:"solid 1px black"}}>
        <h3>{title}</h3>
        <img src={imageUrl} style={{width:"100%"}}/>
      </div>
    );
  }
}

export default MovieCard;