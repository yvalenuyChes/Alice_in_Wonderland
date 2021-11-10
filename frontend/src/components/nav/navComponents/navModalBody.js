/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { signin, authenticate } from '../../../../actions/auth'
import Input from '../../input/input'
import classes from '../../../styles/modalBody/modalBody.module.scss'

function ModalBody() {

	const router = useRouter()

	const dispatch = useDispatch()

	const [values, setValues] = useState({
		email:'',
		password:''
	})

	const {email, password} = values


	const handleChange = name => event => {
      setValues({
         ...values,
         error: false,
         [name]: event.target.value
      })
   }


	function handleSubmit(event) {
      event.preventDefault()

      setValues({ ...values, loading: true, error: false })
      const user = { email, password }

      signin(user).then(data => {
         if (data.error) {
            setValues({ ...values, error: data.error, loading: false })
            console.log(data.error);
         } else {
            authenticate(data, () => {
					router.push(`/`)
            })

         }
      })

   }

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
						className="tab_form"
						onSubmit={handleSubmit}
					>
						<div className="inputBox">
							<Input
								label="Введите e-mail"
								type="email"
								name="authEmail"
								inputMode="email"
								value = {email}
								onChange= {handleChange('email')}
							/>
						</div>
						<div className="inputBox">
							<Input
								label="Введите пароль"
								type="password"
								name="authPassword"
								inputMode="text"
								value={password}
								onChange={handleChange('password')}
							/>
						</div>
						<button
							type="submit"
							className="tab_button"
						>Войти</button>
						<a href="##" className="tab_link">Я забыл e-mail или пароль</a>
						<p className="registration-link">Нет аккаунта? <Link href="/registration"><a className="tab_linkReg"> Зарегистируйтесь</a></Link></p>
					</form>
				</div>
			</div>
		</>
	)


}
export default ModalBody