import React, { useContext, useState } from "react";
import { Context } from "../../index";

import { createProduct, fetchProducts } from "../../http/productAPI";
import "../../css/createart.css";

const CreateProduct = () => {
	const { product } = useContext(Context);
	const [name, setName] = useState("");
	const [size, setSize] = useState("");
	const [volume, setVolume] = useState("");
	const [price, setPrice] = useState("");
	const [pricends, setPricends] = useState("");
	const [type, setType] = useState("");

	const addProduct = () => {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("size", size);
		formData.append("volume", volume);
		formData.append("price", price);
		formData.append("pricends", pricends);
		formData.append("type", type);
		formData.append("count", 1);

		createProduct(formData).then(() => {
			fetchProducts().then((data) => {
				product.setProducts(data.rows);
			});
		});
	};

	return (
		<>
			<div className="add-file">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Название"
				/>
				<hr />
				<input
					type="text"
					value={size}
					onChange={(e) => setSize(e.target.value)}
					placeholder="Размер"
				/>
				<hr />
				<input
					type="text"
					value={volume}
					onChange={(e) => setVolume(e.target.value)}
					placeholder="Объем"
				/>
				<hr />
				<input
					type="text"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					placeholder="Цена без НДС"
				/>
				<hr />
				<input
					type="text"
					value={pricends}
					onChange={(e) => setPricends(e.target.value)}
					placeholder="Цена с НДС"
				/>
				<hr />

				<select
					onChange={(e) => {
						setType(e.target.value);
					}}
					type="text"
					id="type"
					name="type"
					defaultValue=""
				>
					<option value="" hidden>
						Тип
					</option>
					<option value="Плита">Плита</option>
					<option value="Блок">Блок</option>
					<option value="Перемычка">Перемычка</option>
				</select>
				<hr />
				<button onClick={addProduct}>Добавить</button>
			</div>
		</>
	);
};

export default CreateProduct;
