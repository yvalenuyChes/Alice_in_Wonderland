/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import classnames from 'classnames'
import { useState } from "react"
import { CSSTransition } from 'react-transition-group'


export default function AccordionBlock({ title, content }) {

	const [active, toggleActive] = useState(false)

	return (
		<div className="accordion">
			<div
				className="accordion__summary"
				onClick={() => toggleActive(prev => !active)}
				role="button"
				tabIndex={0}
			>
				<div className={active ? "accordion__arrow active" : "accordion__arrow"} />
				<h3>{title}</h3>
			</div>
			<div className="accordion__content">
				<CSSTransition
					in={active}
					timeout={500}
					classNames="accordionList"
					unmountOnExit
					mountOnEnter
				>
					{content}
				</CSSTransition>
			</div>
		</div>
	)
}