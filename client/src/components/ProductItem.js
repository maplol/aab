import React from "react";

const ProductItem = ({ product, addItem }) => {
	const Productscart = () => {
		product.count = 1;
		product.totalprice = product.price;
		product.totalpricends = product.pricends;
		addItem(product);
	};

	return (
		<>
			<tr className="product-block">
				<td>{product.name}</td>
				<td>{product.size}</td>
				<td>{product.volume}</td>
				<td>{product.price}</td>
				<td>{product.pricends}</td>
				{/* <td>
					<input
						type="number"
						min="1"
						max="1000"
						value={count}
						onChange={(e) => setCount(e.target.value)}
					/>
				</td> */}
				<td>
					<button onClick={Productscart}>Заказать</button>
				</td>
			</tr>
		</>
	);
};

export default ProductItem;
