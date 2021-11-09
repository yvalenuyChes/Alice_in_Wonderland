/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import classes from '../../styles/advantagesBlockStyle/advantagesItem.module.scss'

export default function AdvantagesItem({ title, subtitle, img }) {
	return (
		<div className={classes.advantages__item}>
			<h3 className={classes.advantages__item_title}>{title}</h3>
			<div className={classes.advantages__item_subtitle}>{subtitle}</div>
			<div className={classes.advantages__item_img}>
				<img src={img} alt="" />
			</div>
		</div>
	)
}