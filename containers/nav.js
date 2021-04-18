/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Nav() {
	// const router = useRouter()
	return (
		<nav>
			<ul>
				<li>
					<Link href='/kanada'><a>Канада</a></Link>
				</li>
			</ul>
		</nav>
	)
}