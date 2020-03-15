import React from 'react';

export default (props) => {
	const {movie, removeMovie} = props;
	return (
		<div key={movie.id} className="card">
			<img
				className="card-img-top"
				src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
				alt=""
			/>
			<div className="card-body">
				<h6 className="card-title">{movie.title}</h6>
				<div className="d-flex justify-content-between align-items-center">
					<p className="mb-0">Rating: {movie.vote_average}</p>
					<button type="button" className="btn btn-secondary">
						Will Watch
					</button>
					<button onClick={() => {
						removeMovie(movie.id);
					}}>Delete
					</button>
				</div>
			</div>
		</div>
	);
}