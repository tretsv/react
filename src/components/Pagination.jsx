import React, { useContext } from 'react';
import { Context } from "../context"

function Pagination({ page }) {
	const { setPage } = useContext(Context);

	console.log("Pagination render");
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<a
						href="#"
						className="page-link"
						onClick={(event) => {
							event.preventDefault();
							setPage(page > 1 ? page - 1 : 1)
						}}
					>
						Previous
					</a>
				</li>
				<li className="page-item">
					<a
						href="#"
						className="page-link"
					>
						{page}
					</a>
				</li>
				<li className="page-item">
					<a
						href="#"
						className="page-link"
						onClick={(event) => {
							event.preventDefault();
							setPage(page + 1)
						}}
					>
						Next
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
