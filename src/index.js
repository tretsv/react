import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById('root'));

// const data = {
// 	title: "some title",
// 	image: "https://avatars3.githubusercontent.com/u/3907816?s=460&v=4",
// 	overview: "some overview",
// 	rate: 11.2
// };
//
// function Image(props) {
// 	return <img src={props.src} alt={props.alt} style={{width: "100%"}}/>;
// }
//
// class MovieItem extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			show: true,
// 			liked: false
// 		}
// 	}
//
// 	toggleRate = () => {
// 		this.setState({show: !this.state.show});
// 	};
//
// 	handleLike = () => {
// 		this.setState({liked: !this.state.liked});
// 	};
//
// 	render() {
// 		const {data: {title, image, rate, overview}} = this.props;
// 		console.log("state: ", this.state);
// 		return (
// 			<div style={{width: "300px"}}>
// 				<Image src={image} alt={title} />
// 				<p>{title}</p>
// 				<p>{rate}</p>
// 				<div style={{display: "flex", justifyContent: "space-between"}}>
// 					<button
// 						type="button"
// 						onClick={this.toggleRate}
// 					>
// 						{this.state.show ? "hide" : "show"}
// 					</button>
// 					<button
// 						type="button"
// 						onClick={this.handleLike}
// 						className={this.state.liked ? "btn--liked" : ""}
// 					>
// 						Like
// 					</button>
// 				</div>
// 				{this.state.show ? <p>{overview}</p> : null}
// 			</div>
// 		);
// 	}
// }
//
