/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import classNames from 'classnames'

export default function Card({ idCard, title, subtitle }) {

	const [active, toggleActive] = useState(false)

	return (
		<div
			className={classNames({ card_wrapper: true, active })}
			onClick={() => toggleActive(prev => !active)}
		>
			<div className="card">
				<div
					className="front"
					id={idCard}
				>
					<div className="card__title">{title}</div>
				</div>
				<div className="back">
					<div className="card__subtitle">{subtitle}</div>
				</div>
			</div>
		</div>
	)
}