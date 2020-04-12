import React from 'react';

class SortTabs extends React.Component {
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.sortBy !== this.props.sortBy;
	}

	render() {
		console.log("SortTabs render");

		const {sortBy, updateSortBy, updatePage} = this.props;

		const handleClick = value => event => {
			event.preventDefault();
			updateSortBy(value);
			updatePage(1);
		}

		const getTabClass = value => `nav-link${sortBy === value ? " active" : ""}`;

		return (
			<ul className="tabs nav nav-pills">
				<li className="nav-item">
					<a href="#"
						className={getTabClass("popularity.desc")}
						onClick={handleClick("popularity.desc")}
					>
						Popularity desc
					</a>
				</li>
				<li className="nav-item">
					<a href="#"
						className={getTabClass("revenue.desc")}
						onClick={handleClick("revenue.desc")}
					>
						Revenue desc
					</a>
				</li>
				<li className="nav-item">
					<a href="#"
						className={getTabClass("vote_average.desc")}
						onClick={handleClick("vote_average.desc")}
					>
						Vote avg desc
					</a>
				</li>
			</ul>
		);
	}
}

export default SortTabs;
