import React, { useContext, useEffect } from "react";
import ProductList from "../components/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { typeProduct } from "../http/productAPI";

import block from "../assets/2.png";

const Block = observer(() => {
	const { product } = useContext(Context);

	let pricemax = new URLSearchParams(window.location.search).get("pricemax");
	let pricemin = new URLSearchParams(window.location.search).get("pricemin");
	let size = new URLSearchParams(window.location.search).get("size");
	let volume = new URLSearchParams(window.location.search).get("volume");

	useEffect(() => {
		typeProduct("Блок", pricemax, pricemin, size, volume).then((data) => {
			product.setProducts(data);
		});
	}, [pricemax, pricemin, size, volume, product]);

	return (
		<>
			<div className="name-page">Блоки</div>
			<div className="main-width content-type">
				<img src={block} alt="block" />
				<div>
					<p>
						ФБС чаще всего применяются при закладке фундамента. но также их
						можно использовать и при возведении стен или строительстве подвалов.
						При их изготовлении применяется тяжелый бетон.
					</p>
					<p>О;Н;П- водонепроницаемость бетона Н-W4; П-W6; О-W8</p>
					<p>
						Преимущества: высокий уровень прочности. устойчивы к сильным морозам
					</p>
					<p>Недостатки: немалый вес каждого изделия</p>
				</div>
			</div>
			<ProductList />
		</>
	);
});

export default Block;
