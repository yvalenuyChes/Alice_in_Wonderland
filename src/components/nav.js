/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useRouter } from 'next/router'
import Link from 'next/link'
import classes from '../styles/nav.module.scss'

export default function Nav() {
	// const router = useRouter()
	return (
		<nav className={classes.navbar} >
			<div className={classes.navbar__body}>
				<div className={classes.navbar__logo}>
					<Link href="/"><a></a></Link>
				</div>
				<ul>
					<li>
						<Link href='/kanada'><a>Канада</a></Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}