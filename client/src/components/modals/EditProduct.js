import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

import {
	editProduct,
	fetchOneProduct,
	removeProduct,
	fetchProducts,
} from "../../http/productAPI";

import "../../css/productpage.css";
import "../../css/editart.css";

const EditProduct = observer(() => {
	const { product } = useContext(Context);
	const [name, setName] = useState("");
	const [size, setSize] = useState("");
	const [volume, setVolume] = useState("");
	const [price, setPrice] = useState("");
	const [pricends, setPricends] = useState("");
	const [type, setType] = useState("");

	const [producti, setProducti] = useState("");

	const getid = (id) => {
		fetchOneProduct(id).then((data) => {
			setProducti(data);
			setName(data.name);
			setSize(data.size);
			setVolume(data.volume);
			setPrice(data.price);
			setPricends(data.pricends);
			setType(data.type);
		});
	};

	const editName = (e) => {
		producti.name = e;

		editProduct(producti).then((data) => {
			setProducti(data);
			fetchProducts().then((data) => {
				product.setProducts(data.rows);
			});
		});
	};

	const editSize = (e) => {
		producti.size = e;

		editProduct(producti).then((data) => {
			setProducti(data);
			fetchProducts().then((data) => {
				product.setProducts(data.rows);
			});
		});
	};
	const editVolume = (e) => {
		producti.volume = e;

		editProduct(producti).then((data) => {
			setProducti(data);
			fetchProducts().then((data) => {
				product.setProducts(data.rows);
			});
		});
	};
	const editPrice = (e) => {
		producti.price = e;

		editProduct(producti).then((data) => {
			setProducti(data);
			fetchProducts().then((data) => {
				product.setProducts(data.rows);
			});
		});
	};
	const editPricends = (e) => {
		producti.pricends = e;

		editProduct(producti).then((data) => {
			setProducti(data);
			fetchProducts().then((data) => {
				product.setProducts(data.rows);
			});
		});
	};
	const editType = (e) => {
		producti.type = e;

		editProduct(producti).then((data) => {
			setProducti(data);
			fetchProducts().then((data) => {
				product.setProducts(data.rows);
			});
		});
	};

	const removeProductEnd = () => {
		removeProduct(producti.id).then((data) => {
			setProducti(data);
			fetchProducts().then((data) => {
				product.setProducts(data.rows);
			});
		});
	};

	return (
		<>
			<div className="producs">
				<div className="product-list">
					{product.products.map((product) => (
						<div
							className="product-block"
							onClick={() => {
								getid(product.id);
							}}
							id={"product_" + product.id}
							key={product.id}
							product={product}
						>
							<p>{product.name}</p>
							<p>{product.size}</p>
							<p>{product.volume}</p>
							<p>{product.price}</p>
							<p>{product.pricends}</p>
							<p>{product.type}</p>
						</div>
					))}
				</div>
			</div>

			{producti.id ? (
				<div className="edit-product">
					<label>ID: {producti.id}</label>
					<hr />
					<label>
						????????????????:
						<input
							value={name}
							placeholder="????????????????"
							onChange={(e) => {
								setName(e.target.value);
								editName(e.target.value);
							}}
							type="text"
							id="name"
							name="name"
						/>
					</label>
					<hr />
					<label>
						????????????:
						<input
							value={size}
							placeholder="????????????"
							onChange={(e) => {
								setSize(e.target.value);
								editSize(e.target.value);
							}}
							type="text"
							id="size"
							name="size"
						/>
					</label>
					<hr />
					<label>
						??????????:
						<input
							value={volume}
							placeholder="??????????"
							onChange={(e) => {
								editVolume(e.target.value);
								setVolume(e.target.value);
							}}
							type="text"
							id="volume"
							name="volume"
						/>
					</label>
					<hr />
					<label>
						????????:
						<input
							value={price}
							placeholder="????????"
							onChange={(e) => {
								editPrice(e.target.value);
								setPrice(e.target.value);
							}}
							type="text"
							id="price"
							name="price"
						/>
					</label>
					<hr />
					<label>
						???????? ?? ??????:
						<input
							value={pricends}
							placeholder="???????? ?? ??????"
							onChange={(e) => {
								editPricends(e.target.value);
								setPricends(e.target.value);
							}}
							type="text"
							id="pricends"
							name="pricends"
						/>
					</label>
					<label>
						??????:
						<select
							value={type}
							placeholder="??????"
							onChange={(e) => {
								editType(e.target.value);
								setType(e.target.value);
							}}
							type="text"
							id="type"
							name="type"
						>
							<option value="??????????">??????????</option>
							<option value="????????">????????</option>
							<option value="??????????????????">??????????????????</option>
						</select>
					</label>
					<hr />
					<button onClick={removeProductEnd}>??????????????</button>
				</div>
			) : null}
		</>
	);
});

export default EditProduct;
