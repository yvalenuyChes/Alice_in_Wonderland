/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState } from "react"
import classes from '../../styles/accordionStyles/accordionStyles.module.scss'


export default function AccordionBlock({ title, content }) {

	const [active, toggleActive] = useState(false)

	return (
		<div className={classes.accordion}>
			<div
				className={classes.accordion__summary}
				onClick={() => toggleActive(prev => !active)}
				role="button"
				tabIndex={0}
			>
				<h3>{title}</h3>
			</div>
			<div className={classes.accordion__content}>
				{
					active ? content : null
				}
			</div>
		</div>
	)
}