import React from "react";

const Contact = () => {
	return (
		<div className="contacts">
			<div className="name-page">Контакты</div>
			<div className="main-width">
				<table className="contacts-container">
					<thead>
						<tr>
							<th>Должность</th>
							<th>Ф.И.О.</th>
							<th>Телефон</th>
							<th>Часы приема</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Директор</td>
							<td>Иванов Василий Иванович</td>
							<td>+375(21)124-41-21</td>
							<td>с 10:00 до 12:00</td>
						</tr>
						<tr>
							<td>Заместитель директора</td>
							<td>Петров Иван Олегович</td>
							<td>+375(21)258-22-12</td>
							<td>с 9:00 до 10:00</td>
						</tr>
						<tr>
							<td>Специалист по товару</td>
							<td>Камнев Виктор Борисович</td>
							<td>+375(23)372-44-11</td>
							<td>с 8:00 до 16:00</td>
						</tr>
					</tbody>
				</table>

				<p>
					Телефон горячей линии по вопросам закупок 8(0)232 16-55-22
					(круглосуточно)
				</p>

				<table className="contacts-container">
					<thead>
						<tr>
							<th>Город</th>
							<th>Улица</th>
							<th>Номер дома</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Витебск</td>
							<td>Жемчужная</td>
							<td>121</td>
						</tr>
						<tr>
							<td>Гомель</td>
							<td>Ильича</td>
							<td>392</td>
						</tr>
					</tbody>
				</table>
				<p>Доставка по РБ осуществляется в течении 2-ух дней</p>
			</div>
		</div>
	);
};

export default Contact;
