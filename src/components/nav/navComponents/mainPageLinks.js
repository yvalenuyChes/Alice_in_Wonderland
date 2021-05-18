import { useState } from 'react'
import classes from '../../../styles/navStyles/navList.module.scss'

export default function MainPageLinks() {

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [openNav, toggleNavOpen] = useState(false)

	return <>
		<ul className={classes.nav__list}>
			<li className="nav__list_item">
				<a
					href="#main__content"
					className="nav__link"
					onClick={() => { toggleNavOpen(!openNav) }}
				>Предложения</a>
			</li>
			<li className="nav__list_item">
				<a
					onClick={() => toggleNavOpen(!openNav)}
					href="#toor__order"
					className="nav__link"
				>Заказать билет</a>
			</li>
			<li className="nav__list_item">
				<a
					onClick={() => toggleNavOpen(!openNav)}
					href="#whyUs"
					className="nav__link"
				>Преимущества фирмы</a>
			</li>
			<li className="nav__list_item">
				<a
					onClick={() => toggleNavOpen(!openNav)}
					href="#info"
					className="nav__link"
				>Информация</a>
			</li>
			<li className="nav__list_item" />
		</ul>
	</>
}