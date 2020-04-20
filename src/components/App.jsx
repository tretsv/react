import React, {useContext, useEffect, useState} from "react";
import MovieItem from "./MovieItem";
import SortTabs from "./SortTabs";
import Pagination from "./Pagination";
import { Context } from "../context"

function App() {
	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [sortBy, setSortBy] = useState("popularity.desc");
	const [page, setPage] = useState(1);

	const removeMovie = id => {
		console.log("removeMovie before", movies.length);
		setMovies(movies.filter(movie => {return movie.id !== id;}));
	};

	const addMovieToFavorites = movie => {
		console.log("addMovieToFavorites", favorites.length);
		favorites.push(movie);
		setFavorites(favorites);
	};

	const removeMovieFromFavorites = id => {
		console.log("removeMovieFromFavorites", favorites.length);
		setFavorites(favorites.filter(movie => {return movie.id !== id;}));
	};

	useEffect(() => {
		console.log("before fetch");
		fetch(
			`${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY3}&sort_by=${sortBy}&page=${page}`,
		)
			.then(response => response.json())
			.then(data => setMovies(data.results));
	}, [sortBy, page]);

	useContext(Context);

	console.log("App render");
	return (
		<Context.Provider value={{setSortBy, setPage, removeMovie, addMovieToFavorites, removeMovieFromFavorites}}>
			<div className="container">
				<div className="row">
					<div className="col-9">
						<div className="row mb-4">
							<div className="col-12">
								<SortTabs sortBy={sortBy} />
							</div>
						</div>
						<div className="row mb-4">
							<div className="col-12">
								<Pagination page={page} />
							</div>
						</div>
						<div className="row">
							{movies.map(movie => (
								<div className="col-6 mb-4" key={movie.id}>
									<MovieItem movie={movie} />
								</div>
							))}
						</div>
						<div className="row mb-4">
							<div className="col-12">
								<Pagination page={page} />
							</div>
						</div>
					</div>
					<div className="col-3">
						<p>Favorites: {favorites.length}</p>
					</div>
				</div>
			</div>
		</Context.Provider>
	);
}

export default App;
