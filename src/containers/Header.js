import Scene from "../components/scene"
import useWindowWidth from "../costomReactHooks/getWindowWidth"
import classes from '../styles/header/header.module.scss'


function Header() {

	const width = useWindowWidth()



	// function shouldBodyLock() {
	// 	if (bodyLock) {
	// 		document.body.classList.add('bodyLock')
	// 	} else {
	// 		document.body.classList.remove('bodyLock')
	// 	}
	// }





	return (
		<header
			className={classes.header}
			id="header"
		>
			{width > 1000
				? (
					<>
						<Scene />
						<div className={classes.wave} />
					</>
				)
				: <div className={classes.fonPhone} />}

			<div className={classes.header__text}>
				<div className={classes.header__title}>
					<h2>Мы покажем тебе удивительный мир!
               <br />
               За пределами стен есть то, что может тебя поразить
               </h2>
				</div>
			</div>
			<div className={classes.header__squere} />
		</header>
	)
}

export default Header