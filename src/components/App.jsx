import React from "react";
import MovieItem from "./MovieItem";
import SortTabs from "./SortTabs";
import Pagination from "./Pagination";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			favorites: [],
			sortBy: "revenue.desc",
			page: 1,
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

	addMovieToFavorites = movie => {
		const favoritesList = [...this.state.favorites];
		favoritesList.push(movie);
		this.setState({ favorites: favoritesList });
	};

	removeMovieFromFavorites = id => {
		const updatedFavorites = this.state.favorites.filter(movie => {
			return movie.id !== id;
		});
		this.setState({
			favorites: updatedFavorites,
		});
	};

	updateSortBy = (sortBy) => {
		this.setState({sortBy: sortBy})
	}

	updatePage = (page) => {
		this.setState({page: page})
	}

	getMovies = () => {
		console.log("App getMovies", this.state);
		fetch(
			`${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY3}&sort_by=${this.state.sortBy}&page=${this.state.page}`,
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
		if(this.state.sortBy !== prevState.sortBy || this.state.page !== prevState.page) {
			this.getMovies();
		}
	}

	render() {
		console.log("App render");
		const { movies, favorites } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-9">
						<div className="row mb-4">
							<div className="col-12">
								<SortTabs sortBy={this.state.sortBy} updateSortBy={this.updateSortBy} updatePage={this.updatePage} />
							</div>
						</div>
						<div className="row mb-4">
							<div className="col-12">
								<Pagination page={this.state.page} updatePage={this.updatePage} />
							</div>
						</div>
						<div className="row">
							{movies.map(movie => (
								<div className="col-6 mb-4" key={movie.id}>
									<MovieItem
										movie={movie}
										removeMovie={this.removeMovie}
										addMovieToFavorites={this.addMovieToFavorites}
										removeMovieFromFavorites={this.removeMovieFromFavorites}
									/>
								</div>
							))}
						</div>
						<div className="row mb-4">
							<div className="col-12">
								<Pagination page={this.state.page} updatePage={this.updatePage} />
							</div>
						</div>
					</div>
					<div className="col-3">
						<p>Favorites: {favorites.length}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
