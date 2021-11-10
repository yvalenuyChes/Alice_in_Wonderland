/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import Head from 'next/head'
import MainPage from '../../layout/mainPage'
import classes from '../../src/styles/stylesRegistration/stylesRegistration.module.scss'
import Input from '../../src/components/input/input'
import { signup } from '../../actions/auth'

export default function RegistrationPage() {


	const [values, setValues] = useState({
      name: '',
      email: '',
      password: '',
      error: '',
      loading: false,
      message: '',
      showForm: true
   })

   function handleSubmit(event) {
      event.preventDefault()

      setValues({ ...values, loading: true, error: false })
      const user = { name, email, password }

      signup(user).then(() => {
         console.log(values);
         if (error) {
            setValues({ ...values, error, loading: false })
            console.log(error);
         } else {
            setValues({
               ...values,
               name: '',
               password: '',
               error: '',
               email: '',
               loading: false,
               message,
               showForm: false
            })
         }
      })

   }

   const { 
		name, 
		email, 
		password, 
		error, 
		loading, 
		message, 
		// showForm 
	} = values

   const handleChange = name => event => {
      setValues({
         ...values,
         error: false,
         [name]: event.target.value
      })
   }


	return (
		<MainPage>
			<Head>
				<title>Регистрация</title>
			</Head>
			<div className={classes.container}>
				<form
					method="POST"
					// action="/add"
					className="tab_form"
					onSubmit= {handleSubmit}
				>
					<div className="inputBox">
						<Input
							label="Введите e-mail"
							type="email"
							name="email"
							inputMode="email"
							value={email}
							onChange={handleChange('email')}
						/>
					</div>
					<div className="inputBox">
						<Input
							label="Введите пароль"
							type="password"
							name="password"
							inputMode="text"
							value={password}
							onChange={handleChange('password')}
						/>
					</div>
					{/* <div className="inputBox">
						<Input
							label="Введите пароль еще раз"
							type="password"
							name="regPasswordValidation"
							inputMode="text"
						/>
					</div> */}
					<div className="inputBox">
						<Input
							label="Введите своё имя"
							type="text"
							name="name"
							inputMode="text"
							value={name}
							onChange={handleChange('name')}
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
						disabled = {loading}
					>Зарегистрироваться</button>
				</form>
				<div>
					{error}
				</div>
			</div>
		</MainPage>
	)
}