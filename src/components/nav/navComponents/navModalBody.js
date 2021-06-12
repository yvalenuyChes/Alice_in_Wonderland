/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import Input from '../../input/input'
import classes from '../../../styles/modalBody/modalBody.module.scss'

function ModalBody() {

	const dispatch = useDispatch()

	return (
		<>
			<div
				className={classes.popup__body}
			>
				<div
					className={classes.popup__content}
				>
					<span
						role="button"
						className={classes.popup__close}
						onClick={() => dispatch({ type: 'CLOSE_MODAL_WINDOW' })}
					/>
					<div className={classes.popup__title}>Добро пожаловать</div>
					<div className={classes.popup__main} />
					<form
						method="POST"
						action="/enter"
						className="tab_form"
					>
						<div className="inputBox">
							<Input
								label="Введите e-mail"
								type="email"
								name="authEmail"
								inputMode="email"
							/>
						</div>
						<div className="inputBox">
							<Input
								label="Введите пароль"
								type="password"
								name="authPassword"
								inputMode="text"
							/>
						</div>
						<button
							type="submit"
							className="tab_button"
						>Войти</button>
						<a href="##" className="tab_link">Я забыл e-mail или пароль</a>
						<p className="registration-link">Нет аккаунта? <Link href="/registration"><a className="tab_linkReg"> Зарегестируйтесь</a></Link></p>
					</form>
				</div>
			</div>
		</>
	)


}
export default ModalBody