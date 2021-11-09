/* eslint-disable prefer-template */
import { useEffect } from 'react'

export default function Scene() {

	useEffect(() => {
		const header = document.querySelector('#header')
		const layers = header.querySelectorAll('.layer')
		header.addEventListener('mousemove', event => {
			layers.forEach(layer => {
				const speed = layer.getAttribute('data-speed')
				// eslint-disable-next-line no-param-reassign
				layer.style.transform = `translateX(${event.clientX * speed / 1000}px)`
			})
		})
		return header.removeEventListener('mousemove', event => {
			layers.forEach(layer => {
				const speed = layer.getAttribute('data-speed')
				// eslint-disable-next-line no-param-reassign
				layer.style.transform = `translateX(${event.clientX * speed / 1000}px)`
			})
		})
	})


	return (
		<div className="scene__body">
			<div className="layer_bg layer" data-speed="10" />
			<div className="layer_girl layer" data-speed="30" />
		</div>
	)
}

