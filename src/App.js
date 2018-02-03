import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "신과 함께",
            poster: "http://img.movist.com/?img=/x00/04/78/00_p1.jpg"
          },
          {
            title: "염력",
            poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/b/b2/%EC%98%81%ED%99%94_%EC%97%BC%EB%A0%A5.jpg/250px-%EC%98%81%ED%99%94_%EC%97%BC%EB%A0%A5.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
