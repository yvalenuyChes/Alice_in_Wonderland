/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
// import Accordion from '@material-ui/core/Accordion'
// import { makeStyles } from '@material-ui/core/styles'
// import AccordionSummary from '@material-ui/core/AccordionSummary'
// import AccordionDetails from '@material-ui/core/AccordionDetails'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import { accordionStyle } from './accordionStyle'

// const useStyles = makeStyles(accordionStyle)


// export default function AccordionBlock({ title }) {

// 	const classes = useStyles()

// 	return (
// 		<Accordion className={classes.accordion}>
// 			<AccordionSummary
// 				expandIcon={<ExpandMoreIcon />}
// 				aria-controls="panel1a-content"
// 				id="panel1a-header"
// 			// className={classes.summary}
// 			>
// 				<h3>{title}</h3>
// 			</AccordionSummary>
// 			<AccordionDetails>
// 				Im testing this block
// 			</AccordionDetails>
// 		</Accordion>
// 	)
// }

import { useState } from "react"


export default function AccordionBlock({ title, content }) {

	const [active, toggleActive] = useState(false)

	return (
		<>
			<div className="accardeon">
				<div
					className="accardeon__summary"
					onClick={() => toggleActive(prev => !active)}
					role="button"
					tabIndex={0}
				>
					<h3>{title}</h3>
				</div>
				<div className="accordion__content">
					{
						active ? { content } : null
					}
				</div>
			</div>
		</>
	)
}