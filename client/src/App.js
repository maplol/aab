import React, { useContext, useEffect, useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";

export const CountContext = createContext(null);

const App = observer(() => {
	let localCart = localStorage.getItem("cart");

	const { user } = useContext(Context);

	const [getcount, setGetcount] = useState(0 + " товаров");
	const [getprice, setGetprice] = useState(0);
	const [gettotalprice, setGettotalprice] = useState(0);
	const [gettotalpricends, setGettotalpricends] = useState(0);
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		let cartCopy = [...cart];
		let { id } = item;

		let existingItem = cartCopy.find((cartItem) => cartItem.id == id);

		if (existingItem) {
			existingItem.count += item.count;
		} else {
			cartCopy.push(item);
		}

		setCart(cartCopy);
		let stringCart = JSON.stringify(cartCopy);
		localStorage.setItem("cart", stringCart);
	};

	const editItem = (itemID, amount) => {
		let cartCopy = [...cart];
		let existentItem = cartCopy.find((item) => item.id == itemID);

		if (!existentItem) return;

		existentItem.count = amount;
		existentItem.totalprice = (amount * existentItem.price).toFixed(2);
		existentItem.totalpricends = (amount * existentItem.pricends).toFixed(2);
		if (existentItem.quantity <= 0) {
			cartCopy = cartCopy.filter((item) => item.id != itemID);
		}
		setCart(cartCopy);

		let cartString = JSON.stringify(cartCopy);
		localStorage.setItem("cart", cartString);
	};

	useEffect(() => {
		localCart = JSON.parse(localCart);
		if (localCart) {
			setCart(localCart);
			setGetcount(
				localCart.length <= 1
					? localCart.length + " товар"
					: localCart.length + " товара" && localCart.length >= 5
					? localCart.length + " товаров"
					: localCart.length + " товара"
			);
			var total = 0;
			var totalprice = 0;
			var totalpricends = 0;
			for (var i = 0; i < localCart.length; i++) {
				total += parseFloat(localCart[i].price, 10);
				totalprice += parseFloat(localCart[i].totalprice, 10);
				totalpricends += parseFloat(localCart[i].totalpricends, 10);
			}
			setGetprice(total.toFixed(2));
			setGettotalprice(totalprice.toFixed(2));
			setGettotalpricends(totalpricends.toFixed(2));
		}

		if (localStorage.getItem("token")) {
			check()
				.then((data) => {
					user.setUser(data);
					user.setIsAuth(true);
				})
				.finally();
		}
	}, [localCart]);

	return (
		<>
			<BrowserRouter>
				<CountContext.Provider
					value={{
						getcount,
						addItem,
						getprice,
						editItem,
						gettotalprice,
						gettotalpricends,
					}}
				>
					<NavBar />
					<AppRouter />
					<Footer />
				</CountContext.Provider>
			</BrowserRouter>
		</>
	);
});

export default App;
