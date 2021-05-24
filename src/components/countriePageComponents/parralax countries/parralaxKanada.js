/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
import { useEffect, useState } from 'react'
import getNodeClientHeight from '../../../costomReactHooks/getNodeClientHeight'
import useWindowWidth from '../../../costomReactHooks/getWindowWidth'

export default function ParralaxCountries() {


	function documentScrollValue() {
		const [documentScroll, setScroll] = useState(0)
		useEffect(() => {
			window.addEventListener('scroll', () => { setScroll(prev => window.scrollY + 1) })
			return () => {
				window.removeEventListener('scroll', () => { setScroll(prev => window.scrollY + 1) })
			}
		})
		return documentScroll.toFixed()
	}


	const scroll = documentScrollValue()
	const windowWidth = useWindowWidth()
	const parralaxContentHeight = getNodeClientHeight('.content-paralax')
	const hightTopBlock = getNodeClientHeight('.paralax')


	const p = ((scroll / parralaxContentHeight * 100)).toFixed()
	const topScroll = ((scroll / hightTopBlock * 100) + 1).toFixed()
	useEffect(() => {
		const fog = document.querySelector('.paralax__fog')
		const paralaxMontainBackground = document.querySelector('.paralax__montain_1')
		const paralaxMontainSecond = document.querySelector('.paralax__montain_2')
		const paralaxMontainThird = document.querySelector('.paralax__montain_3')
		const opacity = (1 - 1 / 100 * (topScroll)).toFixed()
		const fogSize = (1 + (windowWidth / 100000 * topScroll)).toFixed()
		function kanadaParralax() {
			window.addEventListener('scroll', event => {
				// увеличивает размер тумана
				fog.style.transform = `scale(${fogSize})`
				// увеличивает его прозрачность(чем ближе к концу тем он прозрачнее)
				fog.style.opacity = opacity ** 2

				// для фоновой горы(очень плавный скрол)
				const background = 1 + (windowWidth / 5000000 * p)
				paralaxMontainBackground.style.transform = `scale(${background})`

				// вторая гора
				const firtsMountain = (1 + windowWidth * 0.000005 * topScroll)
				paralaxMontainSecond.style.transform = `scale(${firtsMountain})`

				// третья гора
				const thirdMountainSpeed = 1 + (windowWidth * 0.00001 * topScroll)
				paralaxMontainThird.style.transform = `scale(${thirdMountainSpeed})`
			})
		}
		return () => kanadaParralax()
	})


	return (
		<div className="page">
			<div className="paralax">
				<div className="paralax__montain paralax__montain_1" />
				<div className="paralax__montain paralax__montain_2" />
				<div className="paralax__montain paralax__montain_3" />
				<div className="paralax__montain paralax__fog" />
			</div>
		</div>
	)
}