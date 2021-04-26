/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import classNames from 'classnames'
import Input from '../input/input'
import { submitHendler } from '../../pureFunctions/submitHandler'


export default function Tabs() {

	const [firstActivateTab, toggleFirstActivateTab] = useState(true)
	const [secondActivateTab, toggleSecondActivateTab] = useState(false)

	const toggleTab = () => {
		toggleFirstActivateTab(!firstActivateTab)
		toggleSecondActivateTab(!secondActivateTab)
	}

	const classesFirstTab = classNames({
		tab: true,
		active: firstActivateTab
	})

	const classesSecondTab = classNames({
		tab: true,
		active: secondActivateTab
	})


	return (
		<div className="block_form">
			<div className="labels_container">
				<label
					onClick={toggleTab}
					title="label-first"
					className={classesFirstTab}
				>Авторизация</label>
				<label
					onClick={toggleTab}
					title="label-second"
					className={classesSecondTab}
				>Регистрация</label>
			</div>
			{
				firstActivateTab
					? <form
						className="tab_form"
						onSubmit={submitHendler}
					>
						<div className="inputBox">
							<Input
								label="Введите e-mail"
								type="email"
							/>
						</div>
						<div className="inputBox">
							<Input
								label="Введите пароль"
								type="password"
							/>
						</div>
						<button
							type="button"
							className="tab_button"
						// onClick={loginHendler}
						>Войти</button>
						<a href="##" className="tab_link">Я забыл e-mail или пароль</a>
					</form>
					: <form
						className="tab_form"
						onSubmit={submitHendler}
					>
						<div className="inputBox">
							<Input
								label="Введите e-mail "
								type="email"
							/>
						</div>
						<div className="inputBox">
							<Input
								label="Введите пароль"
								type="password"
							/>
						</div>
						<button
							type="button"
							className="tab_button"
						// onClick={registerHendler}
						>Регистрация</button>
						<div className="recover">
							<input type="checkbox" id="ckbox" required="true" />
							<label htmlFor="ckbox">Ознакомлен и принимаю <a href="##">условия регистрации</a></label>
						</div>
					</form>
			}

		</div>
	)
}