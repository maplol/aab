import React, { useContext, useState, useEffect } from "react";
import { Context } from "../index";
import { NavLink, useHistory } from "react-router-dom";
import {
	ADMIN_ROUTE,
	MAIN_ROUTE,
	CATALOG_ROUTE,
	CONTACT_ROUTE,
	CART_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";

import logogs from "../assets/logo.svg";
import cartimg from "../assets/cart.svg";

import { Helmet } from "react-helmet";

import { CountContext } from "../App";

const NavBar = observer(() => {
	const { user } = useContext(Context);

	const { getcount, getprice } = useContext(CountContext);

	const history = useHistory();

	const [nametitle, setNametitle] = useState("Главная");

	return (
		<>
			<Helmet>
				<title>{nametitle}</title>
			</Helmet>

			<header>
				<nav className="main-width">
					<NavLink to={MAIN_ROUTE} className="logo">
						<img src={logogs} className="logo" alt="logo" />
					</NavLink>

					<div className="main-puncts">
						<NavLink
							to={MAIN_ROUTE}
							onClick={() => setNametitle("Главная")}
							activeClassName="active-link"
							exact
						>
							Главная
						</NavLink>
						<NavLink
							to={CATALOG_ROUTE}
							onClick={() => setNametitle("Каталог")}
							activeClassName="active-link"
							exact
						>
							Каталог
						</NavLink>
						<NavLink
							to={CONTACT_ROUTE}
							onClick={() => setNametitle("Контакты")}
							activeClassName="active-link"
							exact
						>
							Контакты
						</NavLink>
					</div>

					<NavLink
						to={CART_ROUTE}
						onClick={() => setNametitle("Корзина")}
						activeClassName="active-link"
						exact
						className="cart-btn"
					>
						<img src={cartimg} className="logo" alt="cart" />
						{getcount} - {getprice} р.
					</NavLink>
				</nav>

				{user.isAuth ? (
					<div className="adminpanel">
						<button onClick={() => history.push(ADMIN_ROUTE)}>
							Редактирование
						</button>
					</div>
				) : null}
			</header>
		</>
	);
});

export default NavBar;
