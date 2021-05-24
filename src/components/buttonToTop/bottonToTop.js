/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useEffect } from "react"

export default function ButtonToTop() {

	useEffect(() => {

		const offset = 100
		const scrollUp = document.querySelector('.scroll_up')
		const scrollUpSvgPath = document.querySelector('.scroll_up__path')
		const pathLength = scrollUpSvgPath.getTotalLength()
		scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`
		scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms'
		const getTop = () => window.pageYOffset || document.documentElement.scrollTop
		const Height = document.documentElement.scrollHeight - window.innerHeight
		const updateDashoffset = () => {
			const dashoffset = pathLength - (getTop() * pathLength / Height)
			scrollUpSvgPath.style.strokeDashoffset = dashoffset
		}
		if (getTop() > offset) {
			scrollUp.classList.add('active')
		} else {
			scrollUp.classList.remove('active')
		}
		return () => updateDashoffset()
	})


	return (
		<div
			className="scroll_up"
			onClick={() => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})
			}}
			role="button"
			tabIndex="0"
		>
			<svg className="scroll_up__svg" viewBox="-2 -2 52 52">
				<path
					className="scroll_up__path"
					d="
               M24, 0
               a24, 24 0 0, 1 0, 48
               a24, 24 0 0, 1 0, -48
               "
				/>
			</svg>
		</div>
	)
}