// import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Form from "./Form";
export const url = "https://db-azure-two.vercel.app/rides";
const Homepage = ({ search }) => {
	const [driver, setDriver] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((driver) => setDriver(driver));
		// console.log(driver);
	}, []);

	return (
		<main className="p-6 bg-gray-50 min-h-screen">
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-7">
				{driver
					// search bar
					.filter((driver) => driver.good.includes(search.toLowerCase()))
					.map((driver, id) => (
						<div
							key={id}
							className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4 items-center"
						>
							<h1 className="text-xl font-semibold text-gray-800">
								{driver.driversName}
							</h1>
							<p className="text-gray-600">Goods: {driver.good}</p>
							<p className="text-gray-600">Pick-Up Location: {driver.pickUp}</p>
							<p className="text-gray-600">
								Drop-Off Location: {driver.dropOff}
							</p>
							<p className="text-gray-600">
								Delivery Price: ${driver.deliveryPrice}
							</p>
						</div>
					))}
			</div>

			<Form driver={driver} setDriver={setDriver} />
		</main>
	);
};

export default Homepage;
