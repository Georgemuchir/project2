import React from "react";
import SearchBar from "./SearchBar";

const Nav = ({ search, setSearch }) => {
	return (
		<section className="bg-gray-400 p-4 shadow-md text-white w-full top-0 ">
			<nav className="flex flex-wrap items-center justify-between container mx-auto">
				<div className="flex items-center space-x-4">
					<a
						href="#"
						className="text-xl font-bold text-gray-800 hover:text-white"
					>
						Currier Services
					</a>
				</div>
				<div>
					<SearchBar search={search} setSearch={setSearch} />
				</div>
				<ul>
					<li>
						<a href="#delivery" className="hover:text-white">
							Services
						</a>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Nav;
