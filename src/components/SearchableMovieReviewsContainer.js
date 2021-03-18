import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'YbUEzgB8Ni1unGJAtpSONRfJHZZO3dKY';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  };

  handleSearchInput = event => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch(URL + "&query=" + this.state.searchTerm)
    .then( res => res.json())
    .then(res => this.setState({reviews: res.results}))
  }

    render(){
        return(
          <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="search-input">Search Movie Reviews</label>
              <input id="search-input" type="text" onChange={this.handleSearchInput}/>
              <button type="submit">Submit</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
          </div>  
        )
    }

}

export default SearchableMovieReviewsContainer;
