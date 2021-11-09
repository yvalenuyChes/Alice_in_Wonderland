import { useEffect, useState } from 'react'
import ButtonToTop from '../src/components/buttonToTop/bottonToTop'

import Nav from '../src/components/nav/nav'
// eslint-disable-next-line react/prop-types
export default function MainPage({ children }) {

	const [scrolling, toggleScrolling] = useState(false)
	// eslint-disable-next-line prefer-const
	let [lastScrolling, toggleLastScrolling] = useState(0)
	const [directionDown, toggleDirectionDown] = useState(false)

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop


		if (scrollTop > lastScrolling && !directionDown) {
			toggleScrolling(true)
			toggleDirectionDown(true)
		} else if (scrollTop < lastScrolling) {
			toggleScrolling(false)
			toggleDirectionDown(false)
		}
		toggleLastScrolling(lastScrolling = scrollTop)
	}


	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	return (
		<>
			{scrolling ? null : <Nav />}
			<div className="wrapper">
				<main>
					{children}
				</main>
				<ButtonToTop />
			</div>
		</>
	)
}
