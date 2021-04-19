import Scene from "../components/scene/scene"
import classes from '../styles/header.module.scss'

function Header() {

	return (
		<header
			className={classes.header}
			id="header"
		>
			<>
				<Scene />
				<div className={classes.wave} />

			</>
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