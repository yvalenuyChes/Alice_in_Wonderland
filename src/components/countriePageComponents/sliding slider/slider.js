/* eslint-disable react/prop-types */
import classes from '../../../styles/countriesStyles/SlidingSlider/slidingSlider.module.scss'


export default function SlidingSlider({ title, subtitle, sendClass }) {
	return (
		<div className={`${classes.img_box} ${sendClass}`}>
			<span className={classes.border_left_rig} />
			<span className={classes.border_top_bot} />
			<div className={classes.container_box}>
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</div>
		</div>
	)
}
