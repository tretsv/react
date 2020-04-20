import React from "react";

class MovieItem extends React.Component {
	constructor() {
		super();
		this.state = {
			favorite: false,
		};
	}

	render() {
		const { movie, removeMovie, addMovieToFavorites, removeMovieFromFavorites } = this.props;
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
						{this.state.favorite ? (
							<button
								type="button"
								className="btn btn-success"
								onClick={() => {
									this.setState({
										favorite: false,
									});
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
									this.setState({
										favorite: true,
									});
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
}

export default MovieItem;
