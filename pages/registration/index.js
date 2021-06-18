/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head'
import MainPage from '../../layout/mainPage'
import classes from '../../src/styles/stylesRegistration/stylesRegistration.module.scss'
import Input from '../../src/components/input/input'

export default function RegistrationPage() {
	return (
		<MainPage>
			<Head>
				<title>Регистрация</title>
			</Head>
			<div className={classes.container}>
				<form
					method="POST"
					action="/add"
					className="tab_form"
				>
					<div className="inputBox">
						<Input
							label="Введите e-mail"
							type="email"
							name="email"
							inputMode="email"
						/>
					</div>
					<div className="inputBox">
						<Input
							label="Введите пароль"
							type="password"
							name="password"
							inputMode="text"
						/>
					</div>
					<div className="inputBox">
						<Input
							label="Введите пароль еще раз"
							type="password"
							name="regPasswordValidation"
							inputMode="text"
						/>
					</div>
					<div className="inputBox">
						<Input
							label="Введите своё имя"
							type="text"
							name="name"
							inputMode="text"
						/>
					</div>
					{/* <div className="inputBox">
							<Input
								label="Добавьте фото"
								type="text"
								name="regName"
								inputMode="text"
							/>
						</div> */}

					<div className="recover">
						<input type="checkbox" id="ckbox" required />
						<label htmlFor="ckbox">Ознакомлен и принимаю <a href="##">условия регистрации</a></label>
					</div>
					<button
						type="submit"
						className="tab_button"
					>Зарегистрироваться</button>
				</form>
			</div>
		</MainPage>
	)
}