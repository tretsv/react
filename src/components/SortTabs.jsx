import React, { useContext } from 'react';
import { Context } from "../context"

function SortTabs({ sortBy }) {
	const { setSortBy, setPage } = useContext(Context);

	const handleClick = value => event => {
		event.preventDefault();
		setSortBy(value);
		setPage(1);
	}

	const getTabClass = value => `nav-link${sortBy === value ? " active" : ""}`;

	console.log("SortTabs render");
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

export default SortTabs;
