import React from 'react';
import moviesData from "../moviesData";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: moviesData,
		};
	}

	render() {
		// console.log(this);
		return (
			<div>
				{this.state.movies.map((movie, index) => {
					return (
						<div key={movie.id}>
							<p>{movie.title}</p>
							<button onClick={() => {
								const updatedMovies = this.state.movies.filter((item) => {
									return item.id !== movie.id;
								});
								this.setState({
									movies: updatedMovies,
								});
							}}>Delete</button>
						</div>
					)
				})}
			</div>
		);
	}
}

export default App;
