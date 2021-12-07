import Admin from "./pages/Admin";

import {
	ADMIN_ROUTE,
	CATALOG_ROUTE,
	LOGIN_ROUTE,
	MAIN_ROUTE,
	CONTACT_ROUTE,
	PRODUCT_ROUTE,
	CART_ROUTE,
	PLITA_ROUTE,
	BLOCK_ROUTE,
	PEREMICHKA_ROUTE,
} from "./utils/consts";

import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import Plita from "./pages/Plita";
import Block from "./pages/Block";
import Peremichka from "./pages/Peremichka";

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: Admin,
	},
];

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Main,
	},
	{
		path: CATALOG_ROUTE,
		Component: Catalog,
	},
	{
		path: LOGIN_ROUTE,
		Component: Auth,
	},

	{
		path: PRODUCT_ROUTE,
		Component: Product,
	},
	{
		path: CONTACT_ROUTE,
		Component: Contact,
	},
	{
		path: CART_ROUTE,
		Component: Cart,
	},
	{
		path: PLITA_ROUTE,
		Component: Plita,
	},
	{
		path: BLOCK_ROUTE,
		Component: Block,
	},
	{
		path: PEREMICHKA_ROUTE,
		Component: Peremichka,
	},
];
