import React from "react";
import moviesData from "../moviesData";
import MovieItem from "./MovieItem";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: moviesData,
			moviesWillWatch: [],
		};
	}

	removeMovie = id => {
		const { movies } = this.state;
		const updatedMovies = movies.filter(movie => {
			return movie.id !== id;
		});
		this.setState({
			movies: updatedMovies,
		});
	};

	addMovieToWillWatch = movie => {
		const willWatchList = [...this.state.moviesWillWatch];
		willWatchList.push(movie);
		this.setState({ moviesWillWatch: willWatchList });
	};

	removeMovieFromWillWatch = id => {
		const updatedMoviesWillWatch = this.state.moviesWillWatch.filter(movie => {
			return movie.id !== id;
		});
		this.setState({
			moviesWillWatch: updatedMoviesWillWatch,
		});
	};

	render() {
		// console.log(this);
		const { movies, moviesWillWatch } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-9">
						<div className="row">
							{movies.map(movie => (
								<div className="col-6 mb-4" key={movie.id}>
									<MovieItem
										movie={movie}
										removeMovie={this.removeMovie}
										addMovieToWillWatch={this.addMovieToWillWatch}
										removeMovieFromWillWatch={this.removeMovieFromWillWatch}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="col-3">
						<p>Will Watch: {moviesWillWatch.length}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
