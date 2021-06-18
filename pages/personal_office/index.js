/* eslint-disable react/prop-types */
import Head from 'next/head'
// import classNames from 'classnames'
import MainPage from "../../layout/mainPage"

export default function PersonalOffice() {

	// const classes = classNames({
	// 	ticket__body: true,
	// 	plane: true
	// })

	return (
		<MainPage>
			<Head>
				<title>Личный кабинет</title>
			</Head>
			<div className="personal-office__container">
				<div className="personal-office__header">
					<div className="personal-office__user-name">
						<h2> Привет имя
							{/* {username} */}
						</h2>
					</div>
					<div className="personal-office__user-img">
						<img src="https://people.ucsc.edu/~pmorale5/img/person-icon-8.png" alt="userImg" />
					</div>
				</div>
				<hr />
				<div className="personal-office__form">
					<div className="personal-office__form-item">
						<p>Ваше имя</p>
					</div>
					<div className="personal-office__form-item">
						<p>Ваша фамилия</p>
					</div>
					<div className="personal-office__form-item">
						<p>Ваш возраст</p>
					</div>
					<div className="personal-office__form-item">
						<p>Изменить фото</p>
					</div>
				</div>
				<div className="personal-office__ticket-list">
					<div className="personal-office__ticket-list-title">
						<h2>Ваши заказы</h2>
					</div>
					<ul className="personal-office__ticket-list-body">
						<li>
							<div className="ticket__body train">
								<div className="ticket__header">
									<span className="ticket__id">Id билета: 18565861</span>
									<span className="ticket__order-date">09.07.21</span>
								</div>
								<div className="ticket__info">
									<span className="ticket__destination"> Мальдивы </span>
									<span className="ticket__trip"> 17.08.2021 / 28.08.21 </span>
								</div>
							</div>
						</li>
						<li>
							<div className="ticket__body plane">
								<div className="ticket__header">
									<span className="ticket__id">Id билета: 18565861</span>
									<span className="ticket__order-date">15.09.21</span>
								</div>
								<div className="ticket__info">
									<span className="ticket__destination"> Канада </span>
									<span className="ticket__trip"> 30.09.2021 / 11.10.21 </span>
								</div>
							</div>
						</li>
						<li>
							<div className="ticket__body bus">
								<div className="ticket__header">
									<span className="ticket__id">Id билета: 18565861</span>
									<span className="ticket__order-date">10.10.21</span>
								</div>
								<div className="ticket__info">
									<span className="ticket__destination"> Нидерланды </span>
									<span className="ticket__trip"> 11.12.2021 / 31.12.21 </span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</MainPage>
	)
}