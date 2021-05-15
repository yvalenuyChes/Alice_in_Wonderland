/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import classes from '../../styles/navStyles/nav.module.scss'
import '../../styles/navStyles/popupStyle.module.css'
import useWindowWidth from '../../costomReactHooks/getWindowWidth'
import NavListDesktop from './navComponents/navForDesktop'


export default function Nav() {

	const width = useWindowWidth()

	// const [mouseClickOnLink, isMouseClickOnLink] = useState(false)
	// const [popupOpen, isPopupOpen] = useState(false)
	// const [openNav, toggleNavOpen] = useState(false)

	// const handleOpen = () => {
	// 	// eslint-disable-next-line no-unused-vars
	// 	isPopupOpen(prev => !popupOpen)
	// }

	// function modalBody() {
	// 	return <div className={classes.popup__body}>
	// 		<div className={classes.popup__content}>
	// 			<span
	// 				role="button"
	// 				className="popup__close"
	// 				onClick={handleOpen}
	// 			/>
	// 			<div className="popup__title">Добро пожаловать</div>
	// 			<div className="popup__main" />
	// 			<Tabs />
	// 		</div>
	// 	</div>
	// }

	return (
		<nav className={classes.navbar} >
			<div className={classes.navbar__body}>
				<div className={classes.navbar__logo}>
					<Link href="/"><a /></Link>
				</div>
				{
					width > 767 ? <NavListDesktop /> : null
				}
			</div>
		</nav>
	)
}