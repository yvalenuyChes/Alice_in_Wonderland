/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import Link from 'next/link'
import classes from '../../styles/navStyles/nav.module.scss'
import useWindowWidth from '../../costomReactHooks/getWindowWidth'
import NavListDesktop from './navComponents/navForDesktop'
import NavForPhones from './navComponents/navForPhones'


export default function Nav() {

	const width = useWindowWidth()

	return (
		<nav className={classes.navbar} >
			<div className={classes.navbar__body}>
				<div className={classes.navbar__logo}>
					<Link href="/"><a /></Link>
				</div>
				{
					width > 767 ? <NavListDesktop /> : <NavForPhones />
				}
			</div>
		</nav>
	)
}