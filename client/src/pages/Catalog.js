import React from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { PLITA_ROUTE } from "../utils/consts";
import { BLOCK_ROUTE } from "../utils/consts";
import { PEREMICHKA_ROUTE } from "../utils/consts";

import plita from "../assets/1.png";
import block from "../assets/2.png";
import peremichka from "../assets/3.png";

const Catalog = observer(() => {
	const history = useHistory();

	return (
		<div className="catalog">
			<div className="name-page">Каталог продукции</div>

			<div className="catalog-container main-width">
				<div
					className="type-container"
					onClick={() => history.push(PLITA_ROUTE)}
				>
					<p>Плиты</p>
					<img src={plita} alt="plita" />
				</div>
				<div
					className="type-container"
					onClick={() => history.push(BLOCK_ROUTE)}
				>
					<p>Блоки</p>
					<img src={block} alt="block" />
				</div>
				<div
					className="type-container"
					onClick={() => history.push(PEREMICHKA_ROUTE)}
				>
					<p>Перемычки</p>
					<img src={peremichka} alt="peremichka" />
				</div>
			</div>
		</div>
	);
});

export default Catalog;
