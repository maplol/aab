import React, { useContext, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { login } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
	const { user } = useContext(Context);
	const location = useLocation();
	const history = useHistory();
	const isLogin = location.pathname === LOGIN_ROUTE;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, password);
			}

			user.setUser(data);
			user.setIsAuth(true);
			history.push(MAIN_ROUTE);
		} catch (e) {
			alert(e.response.data.message);
		}
	};

	return (
		<div>
			<div>
				<h2>Авторизация</h2>
				<form>
					<input
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						placeholder="Пароль"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
					<div>
						<button variant={"outline-success"} onClick={click}>
							Войти
						</button>
					</div>
				</form>
			</div>
		</div>
	);
});

export default Auth;
