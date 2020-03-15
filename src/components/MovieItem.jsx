import React from 'react';

export default (props) => {
	const {movie, removeMovie} = props;
	return (
		<div key={movie.id}>
			<p>{movie.title}</p>
			<button onClick={() => {
				removeMovie(movie.id);
			}}>Delete</button>
		</div>
	);
}