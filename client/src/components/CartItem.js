import React, { useState, useEffect } from "react";

const CartItem = ({ product, editItem }) => {
	const productCart = (e) => {
		product.count = parseInt(e.target.value);
		product.totalprice = (product.count * product.price).toFixed(2);
		product.totalpricends = (product.count * product.pricends).toFixed(2);
		editItem(product.id, product.count);
	};

	return (
		<tr className="product-block">
			<td>{product.name}</td>
			<td>{product.size}</td>
			<td>{product.volume}</td>
			<td>{product.price}</td>
			<td>{product.pricends}</td>
			<td>
				<input
					type="number"
					min="1"
					max="1000"
					value={product.count}
					onChange={(e) => productCart(e)}
				/>
			</td>
			<td>{product.totalprice}</td>
			<td>{product.totalpricends}</td>
		</tr>
	);
};

export default CartItem;
