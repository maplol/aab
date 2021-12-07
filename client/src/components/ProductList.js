import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ProductItem from "./ProductItem";
import Filter from "./Filter";

import { CountContext } from "../App";

const ProductList = observer(() => {
	const { product } = useContext(Context);

	const { addItem } = useContext(CountContext);

	return (
		<div className="products main-width">
			<Filter />
			<table className="product-list">
				<thead>
					<tr className="categories">
						<th>Название</th>
						<th>Размер</th>
						<th>Объем</th>
						<th>Цена без НДС</th>
						<th>Цена с НДС</th>
						<th>Корзина</th>
					</tr>
				</thead>
				<tbody>
					{product.products.map((product) => (
						<ProductItem key={product.id} product={product} addItem={addItem} />
					))}
				</tbody>
			</table>
		</div>
	);
});

export default ProductList;
