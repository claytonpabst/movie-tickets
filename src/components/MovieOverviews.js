import React, { Component } from 'react';
import axios from './../movies.js'
import MovieCard from './MovieCard.js'
import MovieDetails from './MovieDetails.js'

class MovieOverviews extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      currentIndexToDisplay: 0
    }
  }

  componentDidMount(){
    axios.get.then((res) => {
      console.log(res)
      this.setState({
        movies: res.data
      })
    })
  }

  render() {
    let movieCards = this.state.movies.map((movie, i) => {
      return (
        <div onClick={() => this.setState({currentIndexToDisplay:i})}>
          <MovieCard key={i} movie={movie}/>
        </div>
      )
    })

    let movieToDisplay = []
    movieToDisplay = this.state.movies[this.state.currentIndexToDisplay]

    return (
      <div>
        <div className="MovieOverviews" style={{display:"flex", flexDirection:"row"}}>
          {movieCards}
        </div>
        {this.state.movies.length &&
          <MovieDetails movieToDisplay={movieToDisplay}/>
        }
      </div>
    );
  }
}

export default MovieOverviews;