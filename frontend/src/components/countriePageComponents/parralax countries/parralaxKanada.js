/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
import { useEffect, useState } from 'react'
import getNode from '../../../costomReactHooks/getNode'
import getNodeClientHeight from '../../../costomReactHooks/getNodeClientHeight'
import useWindowWidth from '../../../costomReactHooks/getWindowWidth'

export default function ParralaxCountries() {


	function documentScrollValue() {
		const [documentScroll, setScroll] = useState(0)
		useEffect(() => {
			window.addEventListener('scroll', () => { setScroll(prev => window.scrollY + 1) })
			return () => {
				window.removeEventListener('scroll', () => { setScroll(prev => 0) })
			}
		})
		return documentScroll.toFixed()
	}
	const scroll = documentScrollValue()
	const windowWidth = useWindowWidth()
	const parralaxContentHeight = getNodeClientHeight('.content-paralax')
	const hightTopBlock = getNodeClientHeight('.paralax')
	const paralaxMontainBackground = getNode('.paralax', '.paralax__montain_1')
	const paralaxMontainSecond = getNode('.paralax', '.paralax__montain_2')
	const paralaxMontainThird = getNode('.paralax', '.paralax__montain_3')

	const p = ((scroll / parralaxContentHeight * 100)).toFixed()
	const topScroll = ((scroll / hightTopBlock * 100) + 1).toFixed()

	function parralax() {
		useEffect(() => {
			window.addEventListener('scroll', event => {
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
			return () => {
				window.removeEventListener('scroll', null)
			}
		})
	}
	parralax()
	return (
		<div className="page">
			<div className="paralax">
				<div className="paralax__montain paralax__montain_1" />
				<div className="paralax__montain paralax__montain_2" />
				<div className="paralax__montain paralax__montain_3" />
			</div>
		</div>
	)
}