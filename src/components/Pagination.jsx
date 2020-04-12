import React from 'react';

class Pagination extends React.Component {
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.page !== this.props.page;
	}

	render() {
		console.log("Pagination render");

		const {page, updatePage} = this.props;

		return (
			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item">
						<a
							href="#"
							className="page-link"
							onClick={(event) => {
								event.preventDefault();
								updatePage(page > 1 ? page - 1 : 1)
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
								updatePage(page + 1)
							}}
						>
							Next
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Pagination;
