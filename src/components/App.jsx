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
		console.log(this);
		return (
			<div>
				{this.state.movies.map((item) => {
					return <p>{item.title}</p>;
				})}
			</div>
		);
	}
}

export default App;
