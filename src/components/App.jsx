import React from "react";
import MovieItem from "./MovieItem";
import SortTabs from "./SortTabs";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: [],
			moviesWillWatch: [],
			sortBy: "revenue.desc",
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

	updateSortBy = value => {
		this.setState({sortBy: value})
	}

	getMovies = () => {
		console.log("App getMovies");
		fetch(
			`${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY3}&sort_by=${this.state.sortBy}`,
		)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.results }));
	}

	componentDidMount() {
		console.log("App didMount");
		this.getMovies();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("App didUpdate");
		// console.log("prev", prevProps, prevState);
		// console.log("this", this.props, this.state);
		if(this.state.sortBy !== prevState.sortBy) {
			this.getMovies();
		}
	}

	render() {
		console.log("App render");
		const { movies, moviesWillWatch } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-9">
						<div className="row mb-4">
							<div className="col-12">
								<SortTabs sortBy={this.state.sortBy} updateSortBy={this.updateSortBy} />
							</div>
						</div>
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
