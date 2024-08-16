import React, { useState } from "react";
import { url } from "./Homepage";

const Form = ({ driver, setDriver }) => {
	const [formData, setFormData] = useState({
		id: 0,
		driversName: "",
		good: [""],
		amount: "",
		pickUp: "",
		dropOff: "",
		deliveryPrice: 0,
	});
	console.log(formData);

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		console.log("hello");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((rides) => setDriver([...driver, rides]));
	};
	return (
		<section
			id="delivery"
			className="bg-gray-100  p-6 md:p-8 lg:p-10 rounded-lg shadow-md max-w-4xl mx-auto"
		>
			<h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
				Get Your Goods Delivered
			</h1>
			<form id="transDetail" className="space-y-4" onSubmit={handleSubmit}>
				<input
					name="driversName"
					type="text"
					placeholder="Drivers Name"
					id="driversName"
					onChange={handleChange}
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<input
					onChange={handleChange}
					type="text"
					placeholder="Type Of Goods you want to be delivered"
					id="good"
					name="good"
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<input
					onChange={handleChange}
					name="pickUp"
					type="text"
					placeholder="PickUp Location"
					id="pickupLocation"
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<input
					onChange={handleChange}
					name="dropOff"
					type="text"
					placeholder="DropOff Location"
					id="dropoffLocation"
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<input
					name="deliveryPrice"
					onChange={handleChange}
					type="number"
					id="deliveryPrice"
					placeholder="Delivery Price"
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					SEND
				</button>
			</form>
		</section>
	);
};

export default Form;
