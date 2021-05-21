/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
import { useEffect, useState } from 'react'
import { getNodeClientHeight, getNode } from '../../../costomReactHooks/getNodeClientHeight'
import {
	getNodeOffsetHight,
	// getDocumentScroll 
} from '../../../costomReactHooks/getDocumentValues'
import useWindowWidth from '../../../costomReactHooks/getWindowWidth'

export default function ParralaxCountries() {


	function documentScrollValue() {
		const [documentScroll, setScroll] = useState(0)
		useEffect(() => {
			window.addEventListener('scroll', () => { setScroll(window.scrollY) })
			return () => {
				window.removeEventListener('scroll', () => { setScroll(window.scrollY) })
			}
		})
		return documentScroll
	}


	const scroll = documentScrollValue()
	const windowWidth = useWindowWidth()


	const parralaxContentHeight = getNodeClientHeight('.test')
	const hightTopBlock = getNodeClientHeight('.card__title')
	const fog = getNode('.paralax__fog')
	const paralaxMontainBackground = getNode('.paralax__montain_1')
	const paralaxMontainSecond = getNode('.paralax__montain_2')
	const paralaxMontainThird = getNode('.paralax__montain_3')


	const p = scroll / parralaxContentHeight * 100
	const topScroll = scroll / hightTopBlock * 100
	const opacity = 1 - 1 / 100 * topScroll
	const fogSize = 1 + (windowWidth / 10000 * topScroll)

	useEffect(() => {
		function kanadaParralax() {
			window.addEventListener('scroll', event => {
				// увеличивает размер тумана
				fog.style.transform = `scale(${fogSize})`
				// увеличивает его прозрачность(чем ближе к концу тем он прозрачнее)
				fog.style.opacity = opacity

				// для фоновой горы(очень плавный скрол)
				const background = 1 + (windowWidth / 5000000 * p)
				paralaxMontainBackground.style.transform = `scale(${background}px)`

				// вторая гора
				const hr = windowWidth / 2000 * topScroll
				const firtsMountain = 1 + (windowWidth * 0.000005 * topScroll)
				paralaxMontainSecond.style.transform = `translate3d(${hr} + 'px, 0, 0')`
				paralaxMontainSecond.style.transform = `scale(${firtsMountain}px)`

				// третья гора
				const thirdMountain = windowWidth / 1500 * topScroll
				const thirdMountainSpeed = 1 + (windowWidth * 0.00001 * topScroll)
				paralaxMontainThird.style.transform = `translate3d(${thirdMountain} + 'px, 0, 0)`
				paralaxMontainThird.style.transform = `scale(${thirdMountainSpeed})`
			})
		}
		return kanadaParralax
	})


	return (
		<>
			<div className="paralax">
				<div className="paralax__montain paralax__montain_1" />
				<div className="paralax__montain paralax__montain_2" />
				<div className="paralax__montain paralax__montain_3" />
				<div className="paralax__montain paralax__fog" />
			</div>
		</>
	)
}