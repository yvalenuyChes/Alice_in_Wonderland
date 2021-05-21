/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */

// const scroll = document.scrollTop()
// const windowWidth = document.outerWidth()
// const parralaxContentHeight = document.querySelector('.content-paralax').outerHeight()
// const hightTopBlock = document.querySelector('.paralax').outerHeight()
// const p = scroll / parralaxContentHeight * 100
// const topScroll = scroll / hightTopBlock * 100
// const opacity = 1 - 1 / 100 * topScroll
// const fogSize = 1 + (windowWidth / 10000 * topScroll)

export default function kanadaParralax() {

	window.addEventListener('scroll', (
		event,
		windowWidth,
		p,
		topScroll,
		opacity,
		fogSize
	) => {
		// увеличивает размер тумана
		document.querySelector('.paralax__fog').css('transform', 'scale(' + fogSize + ')')
		// увеличивает его прозрачность(чем ближе к концу тем он прозрачнее)
		document.querySelector('.paralax__fog').css('opacity', opacity)

		// для фоновой горы(очень плавный скрол)
		const background = 1 + (windowWidth / 5000000 * p)
		document.querySelector('.paralax__montain_1').css('transform', 'scale(' + background + ')')

		// вторая гора
		const hr = windowWidth / 2000 * topScroll
		const firtsMountain = 1 + (windowWidth * 0.000005 * topScroll)
		document.querySelector('.paralax__montain_2').css('transform', 'translate3d(' + hr + 'px, 0, 0) scale(' + firtsMountain + ')')

		// третья гора
		const thirdMountain = windowWidth / 1500 * topScroll
		const thirdMountainSpeed = 1 + (windowWidth * 0.00001 * topScroll)
		document.querySelector('.paralax__montain_3').css('transform', 'translate3d(' + thirdMountain + 'px, 0, 0) scale(' + thirdMountainSpeed + ')')
	})
}