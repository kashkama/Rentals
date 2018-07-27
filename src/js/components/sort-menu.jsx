import React from "react";
import PropTypes from "prop-types";
import "./../../scss/components/menu.scss";

// choose ways to sort rentals
const options = {
	date: "SORTED_BY_DATE",
	price: "SORTED_BY_PRICE",
	rating: "SORTED_BY_RATING"
};

const SortMenu = ({sort="SORTED_BY_DATE", onSelect=f=>f}) => {
	return (
		<nav className="main-nav" role="navigation">
			<h2>Sort Rentals</h2>
			<ul className="nav-container">
				{
					Object.keys(options).map((item, i) =>
						<li>
							<a key={i} href="#" 
								className={(sort === options[item]) ? "selected" : null}
								onClick={e => {
									e.preventDefault();
									onSelect(options[item])
							}}
							>{item}
							</a>
						</li>
					)
				}
			</ul>
		</nav>
	);
};

SortMenu.propTypes = {
    sort: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default SortMenu;