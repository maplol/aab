import React, { useContext, useEffect } from "react";
import ProductList from "../components/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { typeProduct } from "../http/productAPI";

import plita from "../assets/1.png";

const Plita = observer(() => {
	const { product } = useContext(Context);

	let pricemax = new URLSearchParams(window.location.search).get("pricemax");
	let pricemin = new URLSearchParams(window.location.search).get("pricemin");
	let size = new URLSearchParams(window.location.search).get("size");
	let volume = new URLSearchParams(window.location.search).get("volume");

	useEffect(() => {
		typeProduct("Плита", pricemax, pricemin, size, volume).then((data) => {
			product.setProducts(data);
		});
	}, [pricemax, pricemin, size, volume, product]);

	return (
		<>
			<div className="name-page">Плиты</div>
			<div className="main-width content-type">
				<img src={plita} alt="plita" />
				<div>
					<p>
						Пустотные плиты перекрытия применяются при возведении жилых
						многоэтажных домов и административных зданий. Плиты перекрытия из
						железобетона занимают неизменные лидирующие позиции на рынке
						строительных материалов. Прочность, экономичность, жесткость,
						пожарная безопасность, длительный срок эксплуатации- все эти
						преимущества сделали плиты незаменимыми при строительстве
						производственных и жилых зданий, загородных домов, коттеджей и дач.
					</p>
					<p>
						Главное преимущество плит перекрытия – их долговечность. Это
						обусловливает значительное снижение затрат.
					</p>
				</div>
			</div>
			<ProductList />
		</>
	);
});

export default Plita;
