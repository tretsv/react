import React, { useState, useContext } from "react";
import { Context } from "../context"

function MovieItem({ movie }) {
	const { removeMovie, addMovieToFavorites, removeMovieFromFavorites } = useContext(Context);
	const [like, setLike] = useState(false);

	return (
		<div key={movie.id} className="card">
			<img
				className="card-img-top"
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
				alt=""
			/>
			<div className="card-body">
				<h6 className="card-title">{movie.title}</h6>
				<div className="d-flex justify-content-between align-items-center">
					<p className="mb-0">Rating: {movie.vote_average}</p>
					{like ? (
						<button
							type="button"
							className="btn btn-success"
							onClick={() => {
								setLike(false);
								removeMovieFromFavorites(movie.id);
							}}
						>
							Unlike
						</button>
					) : (
						<button
							type="button"
							className="btn btn-secondary"
							onClick={() => {
								setLike(true);
								addMovieToFavorites(movie);
							}}
						>
							Like
						</button>
					)}
					<button
						type="button"
						onClick={() => {
							removeMovieFromFavorites(movie.id);
							removeMovie(movie.id);
						}}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default MovieItem;
