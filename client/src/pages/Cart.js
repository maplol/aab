import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";

import { CountContext } from "../App";

const Cart = () => {
	let localCart = JSON.parse(localStorage.getItem("cart"));
	const [cartaccept, setCartaccept] = useState(false);
	const { editItem, gettotalprice, gettotalpricends } = useContext(
		CountContext
	);

	const btnaccept = () => {
		setCartaccept(true);
		setTimeout(() => {
			setCartaccept(false);
		}, 3000);
	};

	return (
		<div className="cart">
			<div className="name-page">Корзина</div>
			<div className="main-width cart-products">
				<table className="product-list">
					<thead>
						<tr className="categories">
							<th>Название</th>
							<th>Размер</th>
							<th>Объем</th>
							<th>Цена без НДС</th>
							<th>Цена с НДС</th>
							<th>Кол-во</th>
							<th>Итоговая цена без НДС</th>
							<th>Итоговая цена с НДС</th>
						</tr>
					</thead>
					<tbody>
						{localCart
							? localCart.map((product, index) => (
									<CartItem key={index} product={product} editItem={editItem} />
							  ))
							: ""}
					</tbody>
				</table>
				<table className="price-list">
					<thead>
						<tr className="categories">
							<th>Общая цена без НДС</th>
							<th>Общая цена с НДС</th>
						</tr>
					</thead>
					<tbody>
						<tr className="categories">
							<td>{gettotalprice}</td>
							<td>{gettotalpricends}</td>
						</tr>
					</tbody>
					<tfoot>
						<tr className="categories">
							<td colspan="2">
								<button onClick={btnaccept}>Оформить заказ</button>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
			{cartaccept ? (
				<div className="hoverfullsize">
					<div className="hoverfullsize-in">Ваш заказ обрабатывается</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Cart;
