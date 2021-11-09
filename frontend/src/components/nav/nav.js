/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import Link from 'next/link'
import classes from '../../styles/navStyles/nav.module.scss'
import NavBodyWrapper from './navComponents/navBodyWrapper'


export default function Nav() {
	return (
		<nav className={classes.navbar} >
			<div className={classes.navbar__body}>
				<div className={classes.navbar__logo}>
					<Link href="/"><a /></Link>
				</div>
				<NavBodyWrapper />
			</div>
		</nav>
	)
}