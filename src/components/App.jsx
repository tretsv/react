import React from 'react';
import moviesData from "../moviesData";
import MovieItem from "./MovieItem";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: moviesData,
		};
	}

	removeMovie = id => {
		const updatedMovies = this.state.movies.filter((movie) => {
			return movie.id !== id;
		});
		this.setState({
			movies: updatedMovies,
		});
	};

	render() {
		// console.log(this);
		return (
			<div>
				{this.state.movies.map((movie) => {
					return <MovieItem key={movie.id} movie={movie} removeMovie={this.removeMovie}/>;
				})}
			</div>
		)
	}
}

export default App;
