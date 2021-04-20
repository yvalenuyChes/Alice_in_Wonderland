import classes from '../styles/ticketOrderStyles/orderToorWrapper.module.scss'

export default function OrderTicket() {
	return (
		<section className={classes.orderToor} id="toor__order">
			<div className={`${classes.orderToor__title} ${classes.title}`}>
				<h2>Заказать билет</h2>
			</div>
			<div className={classes.orderToor__body}>
				Тут будет слайдер
			</div>

		</section>
	)
}