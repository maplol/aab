import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { typeProduct } from "../http/productAPI";
import mark from "../assets/mark.svg";

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

let listparams = { pricemin: "", pricemax: "", size: [], volume: [] };

const Filter = observer(() => {
	const history = useHistory();
	const [producto, setProducto] = useState([]);
	const [checkeds, setCheckeds] = useState([]);
	const [checkedv, setCheckedv] = useState([]);
	const [sizeopen, setSizeopen] = useState(false);
	const [valueopen, setValueopen] = useState(false);

	const [minimaxi, setMiniMaxi] = useState({
		max: 0,
		min: 1000,
	});

	const [min, setMin] = useState();
	const [max, setMax] = useState();

	const serialize = (obj) =>
		Object.keys(obj)
			.map((key) => (obj[key] != "" ? `${key}=${obj[key]}` : ""))
			.join("&");

	function removeNumber(arr, num) {
		return arr.filter((el) => el !== num);
	}

	const minmax = (e) => {
		setMin(e[0]);
		setMax(e[1]);
	};

	const handleOnChangePrice = (e) => {
		listparams.pricemin = e[0];
		listparams.pricemax = e[1];
		history.push({
			search: serialize(listparams),
		});
	};

	const handleOnChangeSize = (position) => {
		const updatedChecked = checkeds.map((item, index) =>
			index === position ? !item : item
		);
		setCheckeds(updatedChecked);

		if (!checkeds[position]) {
			listparams.size.push(producto[position].size);

			history.push({
				search: serialize(listparams),
			});
		} else {
			listparams.size = removeNumber(listparams.size, producto[position].size);
			history.push({
				search: serialize(listparams),
			});
		}
	};

	const handleOnChangeVolume = (position) => {
		const updatedChecked = checkedv.map((item, index) =>
			index === position ? !item : item
		);
		setCheckedv(updatedChecked);

		if (!checkedv[position]) {
			listparams.volume.push(producto[position].volume);

			history.push({
				search: serialize(listparams),
			});
		} else {
			listparams.volume = removeNumber(
				listparams.volume,
				producto[position].volume
			);
			history.push({
				search: serialize(listparams),
			});
		}
	};

	useEffect(() => {
		typeProduct(history.location.pathname.replace("/catalog/", "")).then(
			(data) => {
				setProducto(data);
				setCheckeds(Array(data.length).fill(false));
				setCheckedv(Array(data.length).fill(false));

				setMiniMaxi({
					max: data.reduce((a, b) => (a.price > b.price ? a : b)).price,
					min: data.reduce((a, b) => (a.price < b.price ? a : b)).price,
				});
				setMin(data.reduce((a, b) => (a.price < b.price ? a : b)).price);
				setMax(data.reduce((a, b) => (a.price > b.price ? a : b)).price);
			}
		);
	}, []);

	return (
		<div className="filter">
			<h2>Параметры</h2>
			<div className="type-of-filter">
				<p className="param-of-filter">Цена</p>
				<div className="minmax">
					<span>{min}</span>
					<span>{max}</span>
				</div>

				<Nouislider
					start={[minimaxi.min, minimaxi.max]}
					range={minimaxi}
					connect
					onSlide={minmax}
					onChange={handleOnChangePrice}
				/>
			</div>

			<div className="type-of-filter">
				<p
					className="param-of-filter"
					onClick={() => {
						setSizeopen(!sizeopen);
					}}
				>
					Размер <img src={mark} />
				</p>
				{sizeopen
					? producto.map((product, k) => (
							<div key={k} className="product-filter">
								<input
									type="checkbox"
									id={"size" + k}
									defaultChecked={checkeds[k]}
									onClick={() => handleOnChangeSize(k)}
								/>
								<label htmlFor={"size" + k}>{product.size}</label>
							</div>
					  ))
					: ""}
			</div>
			<div className="type-of-filter">
				<p
					className="param-of-filter"
					onClick={() => {
						setValueopen(!valueopen);
					}}
				>
					Объем <img src={mark} />
				</p>
				{valueopen
					? producto.map((product, k) => (
							<div key={k} className="product-filter">
								<input
									type="checkbox"
									id={"volume" + k}
									defaultChecked={checkedv[k]}
									onClick={() => handleOnChangeVolume(k)}
								/>
								<label htmlFor={"volume" + k}>{product.volume}</label>
							</div>
					  ))
					: ""}
			</div>
		</div>
	);
});

export default Filter;
