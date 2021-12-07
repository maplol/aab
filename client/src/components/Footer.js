import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="main-width footer-container">
				<div>
					<p>Телефоны по вопросам доставки:</p>
					<span>+375(21)124-41-21 (МТС)</span>
					<br />
					<span>+375(21)258-22-12 (Life)</span>
					<br />
					<span>+375(23)372-44-11 (МТС)</span>
				</div>
				<div>
					<p>Адреса отправных пунктов:</p>
					<span>г. Витебск ул. Жемчужная 121</span>
					<br />
					<span>г. Гомель ул. Ильича 392</span>
					<br />
					<span>Доставка по РБ осуществляется в течении 2-ух дней</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
