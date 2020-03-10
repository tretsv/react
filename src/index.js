import React from 'react';
import ReactDOM from 'react-dom';

const data = {
	title: "some title",
	image: "https://avatars3.githubusercontent.com/u/3907816?s=460&v=4",
	overview: "some overview",
	rate: 11.2
};

function Image(props) {
	return <img src={props.src} alt={props.alt} />;
}

class MovieItem extends React.Component {
	constructor() {
		super();
		this.state = {
			show: true,
		}
	}

	render() {
		const {data: {title, image, rate, overview}} = this.props;
		console.log("state: ", this.state);
		return (
			<div>
				<Image src={image} alt={title} />
				<p>{title}</p>
				<p>{rate}</p>
				<button type="button" onClick={() => {
					this.setState({show: !this.state.show});
				}}>
					{this.state.show ? "hide" : "show"}
				</button>
				{this.state.show ? <p>{overview}</p> : null}
			</div>
		);
	}
}

function App() {
	return (
		<div>
			<MovieItem data={data} />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
