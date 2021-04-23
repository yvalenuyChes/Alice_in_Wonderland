/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Link from 'next/link'
import classes from '../../styles/navStyles/nav.module.scss'
import MainPageLinks from './mainPageLinks'
import Tabs from '../tabs/tabs'
import '../../styles/navStyles/popupStyle.module.css'


export default function Nav() {

	const [mouseClickOnLink, isMouseClickOnLink] = useState(false)
	const [popupOpen, isPopupOpen] = useState(false)
	// const [openNav, toggleNavOpen] = useState(false)

	const handleOpen = () => {
		// eslint-disable-next-line no-unused-vars
		isPopupOpen(prev => !popupOpen)
	}

	function modalBody() {
		return <div className={classes.popup__body}>
			<div className={classes.popup__content}>
				<span
					role="button"
					className="popup__close"
					onClick={handleOpen}
				/>
				<div className="popup__title">Добро пожаловать</div>
				<div className="popup__main" />
				<Tabs />
			</div>
		</div>
	}

	return (
		<nav className={classes.navbar} >
			<div className={classes.navbar__body}>
				<div className={classes.navbar__logo}>
					<Link href="/"><a /></Link>
				</div>
				<div
					className={classes.navbar__list}
				>
					<div
						className={classes.navbar__item}
						onClick={() => isMouseClickOnLink(!mouseClickOnLink)}
						role="menuitem"
						tabIndex={0}
					>
						<span>Главная</span>
						{mouseClickOnLink
							? <MainPageLinks />
							: null
						}
					</div>
					<div
						className={classes.navbar__item}
					>
						<p
							// eslint-disable-next-line no-undef
							onClick={handleOpen}
							id="last_item"
						>Авторизация</p>
						<Modal
							// eslint-disable-next-line no-undef
							open={popupOpen}
							// eslint-disable-next-line no-undef
							onClose={handleOpen}
							aria-labelledby="simple-modal-title"
							aria-describedby="simple-modal-description"
						>
							{modalBody()}
						</Modal>
					</div>
				</div>
			</div>
		</nav>
	)
}