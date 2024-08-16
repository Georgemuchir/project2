import { useState } from "react";

function SearchBar({ search, setSearch }) {
	return (
		<div>
			<input
				name="search"
				type="text"
				value={search}
				placeholder="Search"
				id=""
				onChange={(e) => setSearch(e.target.value)}
				className="w-full text-gray-950  p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>
	);
}

export default SearchBar;
